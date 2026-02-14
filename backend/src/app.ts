import express, { type Request, type Response } from "express";
import authRouter from "../src/routes/authRoutes"

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.send("API running");
});

app.use("/auth", authRouter);

export default app;