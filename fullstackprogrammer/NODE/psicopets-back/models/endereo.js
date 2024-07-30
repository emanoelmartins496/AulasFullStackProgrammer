
import { connection } from "../config/database.js";
import { DataTypes } from "sequelize";

export const endereco = connection.define("endereco", {
    // Configurando a coluna 'nome'
    uf: { // nome VARCHAR(130) NOT NULL
        type: DataTypes.STRING(2), // Defina a coluna 'nome' como VARCHAR
        allowNull: false, // Torna a coluna NOT NULL
    },
    cidade: { // email VARCHAR(255) UNIQUE NOT NULL
        type: DataTypes.STRING, // Por padrão 255 
        allowNull: false,
    },
    cep: { // telefone VARCHAR(255) UNIQUE NOT NULL
        type: DataTypes.STRING(9),
        allowNull: false,
    },
    rua: { // telefone VARCHAR(255) UNIQUE NOT NULL
        type: DataTypes.STRING,
        allowNull: false,
    },
    numero: { // telefone VARCHAR(255) UNIQUE NOT NULL
        type: DataTypes.STRING,
        //se n colocar o allowNull: false ele entende q n é obrigatorio
        defaultValue: "S/N", //
    },
});