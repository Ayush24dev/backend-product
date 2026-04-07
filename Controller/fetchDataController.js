const User = require("../Models/users.model")

const fetchData = async (req, res) => {

    const UserDetails = await User.find()

    try {
        res.status(200).json({message: "data fetched successfully", UserDetails})
    }

    catch(err) {
        console.log(err)
    }
}

module.exports = fetchData