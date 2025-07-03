const express = require('express')
const userRouter = express.Router()
const {loginUser,registerUser} = require('../controllers/userController')

userRouter.post('/registerUser',registerUser)
userRouter.post('/loginUser',loginUser)

module.exports = userRouter