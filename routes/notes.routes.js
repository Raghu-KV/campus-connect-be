import { Router } from "express";
import { getAllNotes } from "../controller/notes.controller.js";

const app = Router();

app.get("/", getAllNotes);

export default app;
