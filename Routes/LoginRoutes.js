const express = require("express")

const router = express.Router()

const UserInfo = require("../Controller/LoginController");

router.post("/", UserInfo)

module.exports = router