import express, { type Request, type Response } from "express";
import { authenticate } from "./middlewares/authenticate.middleware";
import authRouter from "./routes/auth.routes"

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.send("API running");
});

app.use("/auth", authRouter);

app.use(authenticate)

app.use("/test", (req: Request, res: Response) => {
  res.send("Test endpoint working")
})

export default app;