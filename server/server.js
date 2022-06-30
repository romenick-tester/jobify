import express from "express";
import dotenv from "dotenv";
import "express-async-errors";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";
import connectDB from "./db/connect.js";
import authRoutes from "./server-routes/auth.js";
import jobsRoutes from "./server-routes/jobs.js";

dotenv.config();

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send("server is running...")
});

server.use("/api/v1/auth", authRoutes);
server.use("/api/v1/jobs", jobsRoutes);

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