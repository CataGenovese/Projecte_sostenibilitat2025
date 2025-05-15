import express from "express";
import fs from "fs";
import bodyParser from "body-parser";

const app=express();
app.use(bodyParser.json());
app.use(express.static("public"));
app.set('view engine','ejs');
app.set('views', './views');

const readData=()=>{
    try{
        const data=fs.readFileSync(".JSON/IncendisForestals.json");
        return JSON.parse(data)

    }catch(error){
        console.log(error);
    }
};

app.get("/", function(req, res) {
    const data = readData();
    res.render("xd",{data})
});