import express from "express";
import dotenv from "dotenv";
import { name } from "./utils/useName.ts";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello, World ${name}!`);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
