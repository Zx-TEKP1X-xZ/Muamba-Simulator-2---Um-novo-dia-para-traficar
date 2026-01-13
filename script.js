//Começo botão  jogar
const botao = document.getElementById("botaodeInicio");

function iniciar (){
    window.location.href = "historinha.html";
}

botao.addEventListener("click", iniciar);
// Fim botão jogar

//Começo musica de fundo
document.getElementById("audio").volume = 0.3;

const botaoMutar = document.getElementById("muteAudioButton");
let mutar = document.getElementById("audio");
let verificarSom = false

function mutarAudio (){
    if (verificarSom == false) {
        mutar.muted = true;
        verificarSom = true;
    }

    else if (verificarSom == true){
        mutar.muted = false;
        verificarSom = false;
    }
}

botaoMutar.addEventListener("click", mutarAudio);
//Fim música de fundo