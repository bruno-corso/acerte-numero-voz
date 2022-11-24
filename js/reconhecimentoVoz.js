const blocoPalpite = document.querySelector('#chute');
// console.log(blocoPalpite);

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
    blocoPalpite.innerHTML = `
        <p>Você disse:</p>
        <span class="box" id="palpite">${p}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());