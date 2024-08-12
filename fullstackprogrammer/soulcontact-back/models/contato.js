import {model, Schema} from "mongoose";

export const Contato = model("contato", new Schema({
    nome: {
        trim: true, //elimina os espaços sobrando
        type: String,
        required: true
    },
    sobrenome: {
        trim: true,
        type: String,
    },
    email: {
        trim: true,
        type: String,
        unique: true
    },
    telefone: {
        trim: true,
        type: String,
        unique: true,
        required: true
    },
    observacoes: {
        type: String
    },
    favorito: {
        type: Boolean,
        default: false
    }
}));