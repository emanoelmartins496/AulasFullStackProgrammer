CREATE DATABASE pedidos_db;

USE pedidos_db;

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(200) NOT NULL,
	cpf VARCHAR(11) UNIQUE NOT NULL,
	telefone VARCHAR(20) UNIQUE NOT NULL
);


CREATE TABLE pedido(
	idPedido INT PRIMARY KEY AUTO_INCREMENT,
    pedido VARCHAR(100) NOT NULL,
    dataDoPedido DATE NOT NULL,
    fkUsuario INT NOT NULL,
    FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario)
);

INSERT INTO usuario(nome, cpf, telefone) VALUES ("Emanoel Santos", "17509760757", "+559999999");
INSERT INTO usuario(nome, cpf, telefone) VALUES ("Almir Souza", "17508530757", "+559869999");

SELECT * FROM usuario;

INSERT INTO pedido(pedido, dataDoPedido, fkUsuario) VALUES ("Quentinha de 20 reais", "2024-07-28", 2);
INSERT INTO pedido(pedido, dataDoPedido, fkUsuario) VALUES ("Quentinha de 52 reais", "2024-07-27", 1);

SELECT * FROM pedido;