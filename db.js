import mongoose from "mongoose";

export const connectDB = async () => {
    // MongoDB server URL
    const url = "mongodb://127.0.0.1:27017/finmanager";

    const { connection } = await mongoose.connect(url);

    console.log(`MongoDB Connection successful to ${connection.host}`);
};
