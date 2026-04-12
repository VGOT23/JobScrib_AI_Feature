const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        minlength : 3 , 
        maxlength : 30
    },
    email :{
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
    },
    passwordHash : {
        type : String,
        required : true
    },
    timestamps: true
})

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;