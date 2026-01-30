//Começo botões histórinha
const botaoPasse = document.getElementById("botaoPassar"); //variavel botao Proximo
const botaoMenu = document.getElementById("botaoInicio"); //Variavel botao voltar ao menu
const botaoVoltaPag = document.getElementById("botaoVoltaPagina"); //Variavel botao voltar a pagina
const botaoComeco = document.getElementById("botaoComecar");

if (botaoPasse){
    function proximo (){
        window.location.href = "historinha2.html"; //Passa proxima página da historinha
    }
    
    botaoPasse.addEventListener("click", proximo); //Funciona botao proximo
}

if (botaoVoltaPag){
    function volta (){
        window.location.href = "historinha.html";
    }

    botaoVoltaPag.addEventListener("click", volta);
}

if (botaoComeco){
    function comecar(){
        window.location.href = "jogomain.html";
    }

    botaoComeco.addEventListener("click", comecar);
}

function menu  (){
    window.location.href = "introducao.html"; // Volta ao menu principal
}

botaoMenu.addEventListener("click", menu); // Funciona botao voltar ao menu
//Fim botões histórinha