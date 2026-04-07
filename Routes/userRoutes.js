const express = require("express")
const router = express.Router()

const UserDetails = require("../Controller/usercontroller")

router.post("/", UserDetails)

module.exports = router