const mongoose = require("mongoose");
require("dotenv").config()

// connecting to db logic here
const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongoDB connected successfully on: ${connect.connection.host}`)
    } catch (error) {
        throw new Error(`error: ${error.message}`)
    }
}




module.exports = connectDB