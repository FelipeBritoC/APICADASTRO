// let cpfDigitado =document.getElementById("cpf")  
// let cepDigitado =document.getElementById("cep") 
// let ufDigitado =document.getElementById("UF")
// let ruaDigitado =document.getElementById("rua")
// let numeroDigitado =document.getElementById("Número")
// let complementDigitadoo=document.getElementById("Complemento")
// let botaoDigitado = document.getElementById("btnCadastrar");
// botao.addEventListener("click", ()=>{
//     resp = document.getElementById("r")
//     let nomeDigitado =document.getElementById("nome").value;
//     resp.innerHTML = nomeDigitado;
//     let cpfDigitado =document.getElementById("cpf")  
//     let cepDigitado =document.getElementById("cep") 
//     let ufDigitado =document.getElementById("UF")
//     let ruaDigitado =document.getElementById("rua")
//     let numeroDigitado =document.getElementById("Número")
//     let complementoDigitado=document.getElementById("Complemento")

// });
const formCadastro = document.getElementById("frmCadastro")
const inputnomeDigitado =document.getElementById("nome").value;
const inputcpfDigitado =document.getElementById("cpf")  
const inputcepDigitado =document.getElementById("cep") 
const inputufDigitado =document.getElementById("UF")
const inputruaDigitado =document.getElementById("rua")
const inputnumeroDigitado =document.getElementById("Número")
const inputcomplementoDigitado=document.getElementById("Complemento")

function salvar(e){
    e.preventDefault();
    console.log("botão funcionando")
    let nome = inputnomeDigitado
    let cpf = inputcpfDigitado   
    let cep = inputcepDigitado  
    let uf = inputufDigitado 
    let rua = inputruaDigitado
    let numero = inputnumeroDigitado
    let complemento = inputcomplementoDigitado

    let novoAluno = {nome, cpf, cep, uf, rua, numero, complemento}
    console.log(novoAluno)
}

formCadastro.addEventListener("submit", salvar)