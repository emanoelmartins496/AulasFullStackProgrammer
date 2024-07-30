// Modelo para gerar a tabela de clientes no MySQL
// Mapeamento: cada propriedade que definimos vira uma coluna da tabela

import { connection } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Cliente = connection.define("cliente", {
    // Configurando a coluna 'nome'
    nome: { // nome VARCHAR(130) NOT NULL
        type: DataTypes.STRING(130), // Defina a coluna 'nome' como VARCHAR
        allowNull: false, // Torna a coluna NOT NULL
    },
    email: { // email VARCHAR(255) UNIQUE NOT NULL
        type: DataTypes.STRING, // Por padrão 255 
        allowNull: false,
        unique: true, // Define os dados da coluna como UNIQUE
    },
    telefone: { // telefone VARCHAR(255) UNIQUE NOT NULL
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});