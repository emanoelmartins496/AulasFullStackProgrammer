-- Para comentar digite "--"
-- Para o Sql tanto faz minusculo ou maiusculo -> BATATA = batata

SHOW DATABASES; -- mostra o banco de dados.

CREATE DATABASE empresa_db; -- cria um banco de dados com o nome especifico

USE empresa_db; -- seleciona  o banco para criar os comandos 

DROP DATABASE empresa_db; -- apaga tudo do banco de dados *cuidado ao usar*

-- TABELAS: departamento / colaborador / endereço.

-- PRIMARY KEY: define a coluna como chave primaria.
-- AUTO_INCREMENT: quando inserir um novo departamento o ID é aplicado.
-- VARCHAR(LIMITE) = Tipo de texto, você impõe o limite de caracteres.
-- NOT NULL = Torna a coluna obrigatória.
CREATE TABLE departamento(
	idDepartamento INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL
);

DESC departamento; -- descreve a tabela;

SHOW TABLES; -- Lista todas as tabelas no banco de dados;

DROP TABLE departamento;-- apaga a tabela toda *CUIDADO AO USAR*

-- TIPOS 
	-- INT / INTEGER => Até 2 bilhões 
	-- BIGINT => Até 9 quintilhões
    -- DECIMAL => precisão fixa/ ex: preços de produtos.
    -- FLOAT => Até 7 casas de precisão
    -- DOUBLE => Até 15 casas de precisão
    -- VARCHAR => Textos pequenos / simples 
    -- TEXT => Textos longos / muitos caracteres.
    -- DATE => formato  yyy-mm-dd (ano mes e dia)
    -- TIME => formato hh:mm:ss (Hora Minuto Segundo)	
    -- DATETIME => formato  yyy-mm-dd (ano mes e dia) E hh:mm:ss (Hora Minuto Segundo) Juntos
	-- BLOB => Arquivos (Binary Large Object) 
    
CREATE TABLE colaborador(
	idColaborador INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(200) NOT NULL,
	cpf VARCHAR(11) UNIQUE NOT NULL,-- UNIQUE = o valor dessa linha é única, não se repete, tipo cpf.
	salário DECIMAL(10, 2) NOT NULL,-- EXEMPLO: 1418,00
	telefone VARCHAR(20) UNIQUE NOT NULL,
	dataNascimento DATE NOT NULL,
    fkDepartamento INT NOT NULL,
    FOREIGN KEY(fkDepartamento) REFERENCES departamento(idDepartamento) 
);

CREATE TABLE endereco(
	idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    cidade VARCHAR(30) NOT NULL,
    uf VARCHAR(2) NOT NULL,
    rua VARCHAR(40) NOT NULL,
    numero VARCHAR(20) NOT NULL,
    complemento VARCHAR(40) DEFAULT("SEM COMPLEMENTO"), -- DEFAULT, INSERE AUTOMATICAMENTE CASO O CLIENTE N PREENCHA.
    fkColaborador INT NOT NULL,
    FOREIGN KEY(fkColaborador) REFERENCES colaborador(idColaborador)
);

CREATE TABLE dependente(
	idDependente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    idade  VARCHAR(2) NOT NULL,
    fkColaborador INT NOT NULL,
    FOREIGN KEY(fkColaborador) REFERENCES colaborador(idColaborador)
);

SHOW TABLES;
DESC colaborador;

-- Constrains usadas acima
	-- NOT NULL = TORNA A COLUNA OBRIGATÓRIA
    -- UNIQUE = TORNA A COLUNA UNICA
	-- DEFAULT = CRIA UM PADRÃO CASO A COLUNA NÃO SEJA PREENCHIDA
    
    
-- PRÓXIMOS PASSOS
	-- INSERÇÃOsalário DE DADOS
INSERT INTO departamento(nome) VALUES ("Recursos Humanos");
INSERT INTO departamento(nome) VALUES ("Marketing");
INSERT INTO departamento(nome) VALUES ("Financeiro");
INSERT INTO departamento(nome) VALUES ("TI");

SELECT * FROM departamento;
    
INSERT INTO colaborador (nome, cpf, salário, telefone, dataNascimento, fkDepartamento) VALUES ("José Ferreira", "17809876545", 5500.0, "+559999999", "1980-01-25", 4);

INSERT INTO colaborador (nome, cpf, salário, telefone, dataNascimento, fkDepartamento) VALUES ("Pedro Gomes", "17809976547", 6352.0, "+559969999", "1980-01-25", 2);

INSERT INTO colaborador (nome, cpf, salário, telefone, dataNascimento, fkDepartamento) VALUES ("Emanoel Santos", "47809976549", 8999.0, "+559789999", "1980-01-25", 1); 

SELECT * FROM colaborador;

INSERT INTO endereco(cidade, uf, rua, numero, fkColaborador) VALUES("Rio das Ostras", "Rj", "Rua Y", "11", 1);

INSERT INTO endereco(cidade, uf, rua, numero, complemento, fkColaborador) VALUES("Rio das Pedras", "Rj", "Rua Z", "122", "Complemento casa", 2);

INSERT INTO endereco(cidade, uf, rua, numero, complemento, fkColaborador) VALUES("Rio das Antas", "Rj", "Rua U", "800", "Complemento 2", 3);

SELECT * FROM endereco;

INSERT INTO dependente(nome, idade, fkColaborador) VALUES("Julio Cesar", 15, 1);
INSERT INTO dependente(nome, idade, fkColaborador) VALUES("Caio Almeida", 13, 2);
INSERT INTO dependente(nome, idade, fkColaborador) VALUES("Jessica Silva", 28, 3);

SELECT * FROM dependente;