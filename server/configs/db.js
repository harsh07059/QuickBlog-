import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;

    // 1. Check if URI exists to prevent "undefined" errors
    if (!uri) {
      throw new Error("MONGODB_URI is not defined in your .env file");
    }

    // 2. Connect to MongoDB
    const conn = await mongoose.connect(uri, {
      dbName: "mydatabase", 
    });

    // 3. Log success with the host name for clarity
    console.log(`MongoDB Connected: ${conn.connection.host} ✅`);
    
  } catch (error) {
    // 4. Detailed error logging
    console.error("❌ MongoDB Connection Error:");
    console.error(error.message);
    
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;