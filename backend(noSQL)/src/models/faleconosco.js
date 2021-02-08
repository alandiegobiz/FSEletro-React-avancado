const { Schema, model } = require('mongoose');

const ContatoSchema = new Schema({
    nome: {
        type: String
    },
    msg: {
        type: String
    }
})

const modelo = model("contatos", ContatoSchema)

module.exports = modelo