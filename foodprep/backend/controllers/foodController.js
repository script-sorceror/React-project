const foodModel = require("../models/foodmodel");

const fs = require('fs')

const addFood = async(req,res)=>{
    let image_filename =`${req.file.filename}`

    try{
        
        await foodModel.create({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            category:req.body.category,
            image:image_filename
    })

        await food.save()
        res.status(201).json({'message':"Food added"})
    }catch (error){
        console.log(error)
        res.status(500).json({"message":error.message})
    }
}

const listFood = async(req,res)=>{
    try {
        const foods = await foodModel.find({})
        res.json({data:foods})
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":error.message})        
    }
}

const removeFood = async(req,res)=>{
    try {
        const {id} = req.query
        console.log(id);
        const food = await foodModel.findById(id)
        if(!food)
            return res.status(404).json({"meesage":"Food not found"})
        await fsPromises.unlink(path.join(__dirname,'..','uploads',`${food.image}`))
        await foodModel.deleteOne({_id:id})
    } catch (error) {
        console.log(error)
        res.status(500).json({"message":error.message})
    }
}


module.exports = {addFood,listFood,removeFood}