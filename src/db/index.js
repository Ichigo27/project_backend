import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const res = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Connected to DB: ", res.connection.host);

    } catch (err) {
        console.log("Error connecting to DB: ", err.message);
        process.exit(1);
    }
}

export default connectDB;

