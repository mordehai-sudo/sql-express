import mongoose from "mongoose";

const mongoDBURL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/mydb';

mongoose.connect(mongoDBURL).then(() => console.log("Connection Successful"))
    .catch((err) => console.error("Connection Error:", err));



