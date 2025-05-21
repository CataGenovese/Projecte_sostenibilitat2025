import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();



// Función para leer el archivo JSON
const readIncendios = () => {
  const filePath = path.resolve("data", "incendios.json"); // Ruta correcta
  const rawData = fs.readFileSync(filePath);
  return JSON.parse(rawData);
};


// GET /incendios → devuelve todos los incendios
router.get("/", (req, res) => {
  const data = readIncendios();
  res.render("test",{data})
});


// GET /incendios/comarca/:codi_comarca → devuelve incendios que tengan un CODI_COMARCA concreto
router.get("/comarca/:codi_comarca", (req, res) => {
  const data = readIncendios();
  const codiComarca = parseInt(req.params.codi_comarca);
  const incendios = data.filter(i => i.CODI_COMARCA === codiComarca);

  if (incendios.length === 0) {
    return res.status(404).json({ error: "No se encontraron incendios para esta comarca" });
  }

  res.json(incendios);
});

// GET /incendios/municipi/:codi_municipi → devuelve incendios que tengan un CODI_MUNICIPI concreto
router.get("/municipi/:codi_municipi", (req, res) => {
  const data = readIncendios();
  const codiMunicipi = parseInt(req.params.codi_municipi);
  const incendios = data.filter(i => i.CODI_MUNICIPI === codiMunicipi);

  if (incendios.length === 0) {
    return res.status(404).json({ error: "No se encontraron incendios para este municipi" });
  }

  res.json(incendios);
});


export default router;
