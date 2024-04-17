import express from "express";
import mongoose from "mongoose";
import apiRouController from "./routes/apiRouController.js";
import cookieParser from "cookie-parser";
import { requireAuth, checkUser } from "./middleware/authMiddleware.js";
import apiRoutes from "./routes/apiRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(express.json());

app.set("view engine", "ejs");

mongoose
  .connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

//routes
app.get("*", checkUser);
app.get("/", (req, res) => res.render("login-page"));
app.get("/home-page", requireAuth, (req, res) => res.render("home-page"));

app.use(apiRoutes);
app.use(apiRouController);

app.use((req, res) => {
  res.status(404).render("404");
});
