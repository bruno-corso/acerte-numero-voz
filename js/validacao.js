function validaPalpite(palpite){
    const p = parseInt(palpite);

    if (validaNumero(p)) {
        console.log("Palpite invalido, favor pronunciar um número.");
        mostraPalpiteNaTela("Error");
    }

    if (p > maior || p < menor){
        console.log(`"Palpite fora do range, favor pronunciar um numero entre ${menor} e ${maior}. "`);
        mostraPalpiteNaTela("Error");
    }
}

function validaNumero(p) {
    return Number.isNaN(p);
}
