import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.js";
import cors from "cors";

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => res.send("Server running"));

app.use("/api/v1/data", router);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
