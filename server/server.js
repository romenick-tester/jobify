import express from "express";
import dotenv from "dotenv";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import connectDB from "./db/connect.js";

dotenv.config();

const server = express();

server.get("/", (req, res) => {
    res.send("server is running...")
});

server.use(notFound);
server.use(errorHandler);

const start = async () => {
    const db = process.env.MONGODB_ATLAS || "mongodb://localhost:27017";
    const PORT = process.env.PORT || 8080;

    try {
        const conn = await connectDB(db);
        if (conn) {
            console.log(`${conn.connection.host} database connected...`);
            server.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}...`))
        } else {
            process.exit(1);
        }
    } catch (err) {
        console.error(err.message);
    }
};

start();