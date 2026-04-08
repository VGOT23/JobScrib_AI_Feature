const mongoose = require("mongoose")

async function connectDB(req,res) {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Server is connected to DB")
    } catch (error) {
        console.log("Failed to connect to DB")
    }
}

module.exports = connectDB;