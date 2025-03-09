import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

//dbconnection
connectDB();
  
//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)





// Basic route
app.get("/", (req, res) => {
    res.send("API Working");
});

// Start server
app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});
//mongodb+srv://221701504:d6NGt8xgi9KVlbTz@cluster0.eox7v.mongodb.net/?