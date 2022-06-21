import express from "express";
import dotenv from "dotenv";

dotenv.config();

const server = express();

server.get("/", (req, res) => res.send("server is running..."));

const PORT = process.env.PORT || 8080;
server.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`))