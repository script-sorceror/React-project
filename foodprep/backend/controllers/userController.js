const userModel = require('../models/userModel')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const validator = require("validator")

const createToken = (id)=>{
    return jwt.sign(
        {id},
        process.env.JWT_TOKEN_SECRET
    )

}

const loginUser = async(req,res)=>{
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email})
        if(!user)
            return res.status(400).json({"message":"invalid email or password"})
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch)
            return res.status(400).json({"message":"invalid email or password"})

        const token = createToken(user._id)
        res.status(200).json({token})
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})        
    }
}

const registerUser = async(req,res)=>{
    const{name,email,password}= req.body
    try {
        const exists= await userModel.findOne({email})
        if (exist)
            return res.status(400).json({"message":"email already exists"})
        if(validator.isEmail(email))
            return res.status(400).json({"message":"invalid email"})
        if(password.length<8)
            return res.status(400).json({"message":"passwrod must be atleast 8 characters long"})

        const hashedPassword = await bcrypt.hash(password,10)
        const user = await userModel.create({
            name,email,password:hashedPassword
        })
        res.status(201).json({"meeage":"user registered succesfuly"})
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":"internal server error"})
        
    }
}

module.exports = {loginUser,registerUser}