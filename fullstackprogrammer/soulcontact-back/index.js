import express from "express";
import { config } from "dotenv";
config();
import mongoose from "mongoose";
import { Contato } from "./models/contato.js";

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Mongo DB Conectado!");
}).catch((err) => {
    console.log(err);
})

const app = express();
app.use(express.json());

//INSERÇÃO DE CONTA [POST]
app.post("/contatos", async (req, res) => {
    const {nome, sobrenome, email, telefone, observacoes, favorito} = req.body;

    try {
        const novoContato =  new Contato({nome, sobrenome, email, telefone, observacoes, favorito});
        await novoContato.save();
        res.json({ message: "Contato criado com sucesso!" });
    }catch(err){
        res.status(500).json({message: "Um erro ocorreu", error: err});
    }
});

//LISTAGEM DE CONTATOS [GET]

app.listen(3000, () => {
    console.log("serivdor rodando em http://localhost:3000");
});