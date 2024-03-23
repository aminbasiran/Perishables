import express from "express";
import cors from "cors"
import { globalRoutes } from "./routes/globalRoutes.js";
import dotenv from "dotenv"
import connectDB from "./config/mongooseConfig.js";
import { checkIfAuthenticated } from "./middlewares/RequireAuth.js";


dotenv.config()

const app = express()

const PORT = process.env.PORT || 3001
app.use(cors())
app.use(express.json())

app.get("/test", (req,res)=>{
    res.send("works")
})

app.use("/api/v1",globalRoutes)


app.listen(PORT,()=>{
    console.log("Server is listening to port " + PORT)
})

connectDB()