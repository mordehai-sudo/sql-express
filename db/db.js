import mongoose from "mongoose";
import 'dotenv/config';


const mongoDBURL = process.env.MONGODB_URL;
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoDBURL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};


// mongoose.connect(mongoDBURL).then(() => console.log("Connection Successful"))
//     .catch((err) => console.error("Connection Error:", err));



