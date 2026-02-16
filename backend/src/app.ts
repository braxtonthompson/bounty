import express, { type Request, type Response } from "express";
import { authenticate } from "./middlewares/authenticate.middleware";
import authRouter from "./routes/auth.routes"

const app = express();

const api = express.Router()
app.use("/api", api)

api.use(express.json());

api.get("/", (_, res) => {
  res.status(200).json({ message: "API running!" });
});

api.use("/auth", authRouter);

api.use(authenticate)

api.use("/test", (req: Request, res: Response) => {
  res.send("Test endpoint working")
})

export default app;