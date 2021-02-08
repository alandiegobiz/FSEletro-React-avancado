const connection = require('./src/config/connection')
const app = require('./src/config/server')
const Contatos = require('./src/models/faleconosco')
const bodyParser = require('body-parser')
const express = require('express')


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());


app.post("/Contatos", async (req, res) => {
    const {nome, msg} = req.body

    let resultado = await Contatos.create({nome, msg})

    res.json(resultado)
})