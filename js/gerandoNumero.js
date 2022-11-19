const numeroAleatorio = gerarNumeroAleatorio();
console.log(numeroAleatorio)

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 100 +1)
}