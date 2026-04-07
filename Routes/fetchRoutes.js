const express = require("express")
const router = express.Router()

const fetchDetails = require("../Controller/fetchDataController")

router.get("/", fetchDetails)

module.exports = router