const menor = 0;
const maior = 100;

document.querySelector("#num-menor").innerHTML = menor;
document.querySelector("#num-maior").innerHTML = maior;


const numeroAleatorio = gerarNumeroAleatorio();
console.log("O nomero secreto é: ",numeroAleatorio)

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 100 +1)
}