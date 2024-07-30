import { config } from "dotenv";
config(); //carrega as variaveis do .env para o projeto

import { Sequelize } from "sequelize";

//Obejto usado na conexão com o banco de dados.
export const connection = new Sequelize(
    process.env.DB_NAME, //Acessa o valor da variavel DB_NAME
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
    }
);

export async function authenticate(connection){
    // Testar a conexão com o banco mysql
    try {
        await connection.authenticate();
        console.log("Conexão foi feita com sucesso");
    }catch(err) {
        console.log("Um erro aconteceu", err);
    }
}