import { PORT } from './config.js'
import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import json from "./JS/incendis.js";

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/",json)


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
