const { findOne } = require('../models/resume.model');
const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function registerUser(req,res) {
    const {username,email,password} = req.body;

    const isUserRegistered = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if( isUserRegistered ){
        return res.status(401).json({
            message : "user already existed"
        })
    }
    const hash = await bcrypt.hash(password,10);
    const user = await userModel.create({
        username,
        email,
        password : hash
    })

    const token = jwt.sign({
        id : user._id
    },process.env.JWT_SECRET_KEY)

    res.cookie("token",token);

    res.status(201).json({
        message : "user created successfully",
        user : {
            id : user._id,
            username : user.username,
            email : user.email
        }
    })
    
}


async function loginUser(req,res) {
    const {username,password,email} = req.body;

    const user = await userModel.findOne({
        $or:[
            {username},
            {email} 
        ]
    })

    if( !user ) {
        return res.status(401).json({
            message : "User not existed"
        })
    }

    const isPassWordValid = await bcrypt.compare(password,user.password);

    if( !isPassWordValid ){
        return res.status(401).json({
            message : "Password Invaild"
        })
    }

    const token = jwt.sign({
        id : user._id,
    },process.env.JWT_SECRET_KEY)

    res.cookie("token",token);

    res.status(200).json({
        message : "User logged In ",
        username : user.username,
        email : user.email
    })
}


module.exports = {registerUser,loginUser}