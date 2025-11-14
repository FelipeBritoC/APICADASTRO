//promisse
// then catch
// async await

function log (etapa){
    return console.log(etapa+new Date().toLocaleTimeString());
}
function requisicaoSimulada(nome, tempoMs = 1500,deveFalhar=false){
    return new Promise (function(resolve,reject){
        setTimeout(function(){
            if(deveFalhar){
                reject(new Error("Falha em", nome))//Erro
            }else{
                resolve(`${nome} concluida em ${tempoMs}ms`)//Success
            }
        },tempoMs)
    })
}

function exemploThenCatch(){
    log ("1. Inicio (sem await)")
    requisicaoSimulada("Buscar Usuario", 2000)//demora 2s
        .then (function(resultado){
            log(`3.Then ${resultado}`)
        })
        .catch(function(erro){
            console.log("Erro capturado com .catch "+ erro.message)

        })
    log("2. Continou o fluxo sem esperar a promise")
}

// exemploThenCatch()

async function exemploTryCatch(){
    log("1. Etapa com Async Await");
    try {
        const resultado = await requisicaoSimulada("Buscar Usuario", 5000);
        log("2. Resultado obtido com await "+resultado)
    } catch (error) {
        console.error(error)
    }
    log("3 Só roda depois do Await")
}

exemploTryCatch()