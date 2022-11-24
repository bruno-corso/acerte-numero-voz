const elementoChute = document.querySelector('#chute');
// console.log(elementoChute);

const elementoPalpite = document.querySelector('#palpite');
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    var palpite = e.results[0][0].transcript;
    // console.log(e.results[0][0].transcript);
    mostraPalpiteNaTela(palpite);
    validaPalpite(palpite);
}

function mostraPalpiteNaTela (p) {
    elementoPalpite.innerHTML = p    
}