import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try{
        mongoose.connect("mongodb+srv://admin:123@ignaciodacuna.vjipj8m.mongodb.net/entrega")
        console.log("MongoDB connected")
    } catch (error) {
        console.log(`error ${error}`)
    }
}