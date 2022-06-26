import mongoose from "mongoose";

const connectDB = (db) => {
    return mongoose.connect(db, { dbName: "jobify-2022" });
};

export default connectDB;
