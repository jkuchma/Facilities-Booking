import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import buildingsRoute from "./routes/buildings.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = async () => {
    try{
        await mongoose.connect("mongodb+srv://jkuchma:lzk7Ku1926@facilities-booking.dknsmlx.mongodb.net/?retryWrites=true&w=majority");
        console.log("Connected to MongoDB.")
    } catch (error){
        throw error;
    }
};

mongoose.connection.on("diconnected", ()=>{
    console.log("MongoDB disconnected!")
});

mongoose.connection.on("connected", ()=>{
    console.log("MongoDB connected!")
});



//middleware
app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/buildings", buildingsRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    });
});


app.listen(8800, () => {
    connect()
    console.log("Connected to backend.")
});