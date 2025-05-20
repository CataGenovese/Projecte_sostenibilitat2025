import express from "express";
import fs from "fs";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");

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

app.get("/", function (req, res) {
  const data = readData();
  console.log("Datos leídos:", data);
  res.render("xd", { data });
});


const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
