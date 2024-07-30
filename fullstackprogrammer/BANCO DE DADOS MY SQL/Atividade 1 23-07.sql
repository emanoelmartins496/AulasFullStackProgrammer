CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE produto(
	idProduto INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	descricao VARCHAR(100) NOT NULL,-- UNIQUE = o valor dessa linha é única, não se repete, tipo cpf.
	preco DECIMAL(10, 2) NOT NULL,-- EXEMPLO: 1418,00
	estoque VARCHAR(6) NOT NULL
);

CREATE TABLE venda(
	idVenda INT PRIMARY KEY AUTO_INCREMENT,
    quantidade VARCHAR(10) NOT NULL,
    dataDaVenda DATE NOT NULL,
    fkProduto INT NOT NULL,
    FOREIGN KEY(fkProduto) REFERENCES produto(idProduto)
);

SHOW TABLES;

INSERT INTO produto(nome, descricao, preco, estoque) VALUES ("Celular", "Samsung Galaxy A11", 5500.0, 139);
INSERT INTO produto(nome, descricao, preco, estoque) VALUES ("Computador", "Macbook", 15500.0, 150);

SELECT * FROM produto;

INSERT INTO venda(quantidade, dataDaVenda, fkProduto) VALUES ("5", "2024-07-28", 2);
INSERT INTO venda(quantidade, dataDaVenda, fkProduto) VALUES ("8", "2024-07-26", 1);

SELECT * FROM venda;