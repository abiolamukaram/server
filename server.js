// this is the actual server file
// importing express
const express = require("express")
// initializind express and storing it in a variable called app
const app = express()

// port
const port =5000

// testing general route
app.get("/api",(req,res) => {
    res.json({messsage: "welcome to my server"})
})






// listen for request
app.listen(port, () => {
    console.log("server started successfully");
})