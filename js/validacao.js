function validaPalpite(palpite){
    const p = parseInt(palpite);

    if (validaNumero(p)) {
        blocoPalpite.innerHTML += "<div>Palpite invalido, favor pronunciar um número.</div>"
        return
    }

    if (p > maior || p < menor){
        blocoPalpite.innerHTML += `<div>Palpite fora do range, favor pronunciar um numero entre ${menor} e ${maior}.</div>`
        return
    }

    if(p == numeroAleatorio){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era: ${p}</h3>
        <button class="btn" id="btn">Jogar novamente</button>
        `
    } else if(p < numeroAleatorio){
        blocoPalpite.innerHTML += `<p>O número é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></p>`
    } else{
        blocoPalpite.innerHTML += `<p>O número é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></p>`
    }

}

function validaNumero(p) {
    return Number.isNaN(p);
}

document.body.addEventListener('click', (e) => {
    console.log(e);
    if(e.target.id == "btn"){
        window.location.reload();
    }
})
