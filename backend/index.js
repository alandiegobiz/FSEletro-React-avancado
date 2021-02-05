import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const server = express();

server.use(express.json());
server.use(cors());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fullstackeletro"
})


server.get("/produtos", (req, res) => {
    
    connection.query("SELECT * FROM produtos", (error, result) => {
        if(error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})

server.listen(3333)