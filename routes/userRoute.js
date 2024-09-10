// all user endpoint will be defined here as long as it concerns the user
const express = require("express")
const { registerUser, registerAdmin } = require("../controllers/userController")

const router = express.Router()

// user route
router.post("/register", registerUser)

// admin route
router.post("/admin", registerAdmin)







module.exports = router