CREATE DATABASE escola_db;
CREATE TABLE alunos(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(80) NOT null,
	cpf CHAR (11) NOT NULL UNIQUE,
	cep CHAR (8),
	uf CHAR(2),
	rua VARCHAR(120),
	numero INT,
	complemento VARCHAR(120),
	data_hora_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	data_hora_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
	);
INSERT INTO alunos 
	(nome, cpf, cep, uf, rua, numero, complemento)
	VALUES
	("Felipe Brito", "12345678909", "06123456", "SP", "Rua logo ali",30, "Casa"),
	("Daniel Ribeiro", "98765432101", "06123457", "SP", "Rua Fenda do Bíquini",1250, "Apt. do lado do Bob Esponja"),
	("Viviane Diaz","07361598358", "06236710", "SP", "Rua Avenida Marginal",349, "Casa 2"),
	("Mirella Sene", "12345678888", "06123411", "ES", "Rua SENAI", 1250, "apt. 3")