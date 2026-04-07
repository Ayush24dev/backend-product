const User = require("../Models/users.model") // this is model name
const bcrypt = require("bcryptjs")

const jwt = require("jsonwebtoken")

const UserInfo = async (req, res) => {
    const {email, password} = req.body 

 try {
    // selecting the specific value according to the email and password
    const LoginDetails = await User.findOne({email}).select('+password');
    
    console.log(LoginDetails);

    const isMatch = await bcrypt.compare(password, LoginDetails.password)

    console.log("password is matching", isMatch)
 const token = jwt.sign(
           {email: email},
           process.env.SECRET_KEY,
           {expiresIn: "1h"}
        )
   // checking the data that user email and password is matched or not
            if(LoginDetails && isMatch) {
                console.log(LoginDetails.email)
                console.log(LoginDetails.password)
               res.status(200).json({message: "you are logged in successfully", token})
            }
           // displaying the error 
            else {
                res.status(400).json({message:"invalid credentials"})
            }


    }

    catch(err) {
        res.status(500).json({message:"internal server error "})
    }

    

}

module.exports = UserInfo;