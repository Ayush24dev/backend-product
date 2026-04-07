const User = require("../Models/users.model")
const bcrypt = require("bcryptjs")

const UserDetails = async (req, res) => {
    const {name, email, password} = req.body

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt)

    console.log("hashed password is", hashPassword);

    try{
        const userdata = new User({
            name,
            email,
            password: hashPassword
        })

        const savedUser = await userdata.save();

        console.log("userdata is :", savedUser)

        res.status(200).json({message: "user registered successfully"})

    }

    catch(err) {
        res.status(500).json({message: "Internal server error"})
        console.log(err)
    }

}

module.exports = UserDetails