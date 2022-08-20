import { readFile } from "fs/promises";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import Job from "./models/Job.js";

dotenv.config();

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_ATLAS);
        await Job.deleteMany();

        const localData = await readFile(new URL("./MOCK_DATA.json", import.meta.url));

        const productsApi = JSON.parse(localData);

        await Job.create(productsApi);

        console.log("Populate success!");
        process.exit(0);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

start();