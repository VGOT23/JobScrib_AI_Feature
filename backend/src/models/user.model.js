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
    },
    password : {
        type : String,
        required : true
    },
},
)

// userSchema.index({ email: 1 }); // Index for faster Loop

const userModel = mongoose.model("user",userSchema);

module.exports = userModel;