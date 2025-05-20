import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import json from "./JS/incendis.js";
import mapa from "./JS/mapa.js";

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/",json)
app.use("/mapa",mapa)


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
const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
