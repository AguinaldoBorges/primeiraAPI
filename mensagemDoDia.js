// acessando os dados
let dados = require('./dados');

// retornando a frase
function retornarMensagemDoDia(dia){
    return dados.frases[dia -1]
}

// tornando a funcao disponível para ser consumida por outro arquivo
exports.retornarMensagemDoDia = retornarMensagemDoDia;