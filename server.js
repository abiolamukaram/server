// this is the actual server file
// importing express
const express = require("express")
// initializind express and storing it in a variable called app
const app = express()

// port
require("dotenv").config()
const PORT = process.env.PORT || 5000

//  import database connection
const connectDB = require("./database/db")

// execute database connnection
connectDB()

// import user route
const userRoute = require("./routes/userRoute")


// using the user route
app.use("./api/users", userRoute)


// middleware
app.use(express.json())




// testing general route
app.get("/api",(req,res) => {
    res.json({messsage: "welcome to my server"})
})






// listen for request
app.listen(PORT, () => {
    console.log("server started successfully");
})