// const express = require("express");
import express from "express";
import connectToDb from "./config/connectToDb.js";
import mongoose from "mongoose";
import notesRouter from "./routes/notes.routes.js";
import userRoutes from "./routes/user.routes.js";
const app = express();
const port = 3000;

await connectToDb();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("test");
});

app.use("/notes", notesRouter);
app.use("/auth", userRoutes);

mongoose.connection.on("connected", () => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});

mongoose.connection.on("error", (error) => {
  console.log(error);
});
