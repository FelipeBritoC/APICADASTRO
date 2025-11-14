const express = require ("express")
const mysql = require("mysql2/promise")
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors())
const PORT = 3000;

const conexao = mysql.createPool({
    user: "root",
    password: "1234",
    database: "escola_db",
    host: "localhost",
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

(async () => {
    try {   
        const conn = await conexao.getConnection();
        console.log("Banco conectado com sucesso");
        conn.release();
    }catch(err){
        console.log("Erro ao conectar o banco" + err.message)
    }
})();


app.get("/", (request,response) => {
    response.status(200)
    response.json({msg: "Olá caro amigo!"})
})
app.get("/alunos",async (request,response) => {
    try {
        const [resultado] = await conexao.query("SELECT *FROM alunos");
        response.status(200)
        response.json(resultado)
    } catch (error) {
        console.error(erro)
        response.status(500)
        response.json({erro: "Erro ao buscar alunos"})
    }  
})
app.post("/alunos", async function(request, response){
    const {nome, cpf, cep, uf, rua, numero, complemento} = request.body
    if(!nome || !cpf){
        return response.status(400).json({msg: "Nome e CPF são obrigatórios"})
    }
    const sql = `INSERT INTO alunos 
	(nome, cpf, cep, uf, rua, numero, complemento)
	VALUES
	(?, ?, ?, ?, ?,?, ?)`
    const parametro = [nome, cpf, cep, uf, rua, numero, complemento]
    const [resultado] = await conexao.execute(sql,parametro)
    const novoAluno = await conexao.execute(` 
        SELECT *FROM alunos WHERE id = ${resultado.insertId}
        `)
    response.status(201).json({msg: "Aluno criado com sucesso"});
})
app.listen(PORT, function (){
    console.log("Servidor rodando em http://localhost:"+PORT)
})