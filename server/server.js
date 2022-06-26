import express from "express";
import dotenv from "dotenv";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const server = express();

server.get("/", (req, res) => {
    // throw new Error("Oops! Server error found!"); FOR TESTING PURPOSE
    res.send("server is running...")
});

server.use(notFound);
server.use(errorHandler);

const PORT = process.env.PORT || 8080;
server.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`))