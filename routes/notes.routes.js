import { Router } from "express";

const app = Router();

app.get("/", (req, res) => {
  return res.json({ message: "notes route" });
});

export default app;
