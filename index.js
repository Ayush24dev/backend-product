const express = require("express")

const cors = require ("cors")

const dotenv = require("dotenv")

dotenv.config() //load the .env configuration file

const connectDB = require('./Config/db')

connectDB();



console.log("CLOUDINARY_NAME:", process.env.CLOUDINARY_NAME);
console.log("CLOUDINARY_API_KEY:", process.env.CLOUDINARY_API_KEY);
console.log("CLOUDINARY_API_SECRET:", process.env.CLOUDINARY_API_SECRET);

const userRoutes = require("./Routes/userRoutes")

const fetchRoutes = require("./Routes/fetchRoutes")

const LoginRoutes = require("./Routes/LoginRoutes")

const dashboard = require("./Routes/Dashboard")

const productRoutes = require("./Routes/productRoutes")

const app = express()

app.use(express.static("public"))

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/signup", userRoutes)
app.use("/fetch", fetchRoutes)
app.use("/login", LoginRoutes)
app.use("/dashboard", dashboard)
app.use("/product", productRoutes)
app.use("/", (req, res) => {
    res.send("server is running")
})


const PORT = 5000;

app.listen(PORT, () => console.log("server is running http://localhost:5000"))

