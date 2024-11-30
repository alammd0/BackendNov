const express = require('express');

const app = express();


app.use(express.json());

app.listen(3000, () => {
    console.log("Apka prort Stat hogya hai")
})

app.get("/", (req, res) => {
    res.send("Hello Words");
})

app.post("/mydetails", (req, res) => {
    const { name, email } = req.body;
    res.send(`My name : ${name} and email : ${email}`);
})

const MongoDB_URL = 'mongodb://localhost:27017/DataBaseKhalid'

const mongoose = require("mongoose");

mongoose
    .connect(MongoDB_URL, {
    })
    .then(() => {
        console.log("Ha bha Db Conection hogya");
    })
    .catch((err) => {
        console.error(err);
    });