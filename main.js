import { PORT } from './config.js'
import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import incendisRoutes from "./JS/incendis.js"

import json from "./JS/incendis.js";

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/",json)


const readData = () => {
  try {
    const data = fs.readFileSync("./data/incendios.json", "utf-8");
    console.log(data);
    return JSON.parse(data);
  } catch (error) {
    console.error("Error leyendo o parseando incendios.json:", error);
    return [];
  }
};

// Rutas protegidas
app.use("/incendis", incendisRoutes);

//Ultima línea simpre. Función para escuchar
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
