let gameWin = false;
let gameWinPj = false;

//Boton Jugar
const botonGame = document.querySelector(".boton-jugar");

//Numero de rondas jugadas
let numberRounds = 0;

// Counts Markers
let markerPj = 0;
let markerBot = 0;

//--- Elementos Start Game
const containerButtons = document.querySelector('.container-buttons').childNodes;

const opcionGame = document.querySelector(".container-start-buttons");

const containerGame = document.querySelector(".container-game");
const botonRegresar = document.querySelector('.container-return');
const containerReturnMarkerPj = botonRegresar.childNodes[1];
const containerReturnMarkerBot = botonRegresar.childNodes[5];


const opcionGamePlayer = opcionGame.childNodes[1];
const opcionGameTwoPlayers = opcionGame.childNodes[3];
let gameModeTwoPlayers = false;

let bot = false;



const containerBot = document.querySelector('.container-opcion-bot').childNodes

//Body
const body = document
body.addEventListener('DOMContentLoaded', ()=>{
    window.scrollTo(0,0)
});

//Opcioness de la pantalla Principal
//Opcion Jugador Pj
opcionGamePlayer.addEventListener("click", ()=>{
    containerGame.style.visibility = "visible";
    document.querySelector(".container-start").style.visibility = "hidden";
    bot = true;
    botonRegresar.style.display = 'block';
    gameWin = false
    
    markerBot = 0;
    markerPj = 0;
    
    containerButtons[1].style.display = 'inline';
    containerButtons[3].style.display = 'inline';
    

    botonGame.removeEventListener('click', resultWinPlayers);
    botonGame.addEventListener('click', resultWinBot);

    
    // Desactive Mode Two Players
    if(gameModeTwoPlayers == false){
        
        bot = true;
        document.querySelector('.container-opcion-bot').style.display = 'none';
        
    }else{
        gameModeTwoPlayers = false;
    };
    cleanGame();
    historyGame();
   
});

//Funcion para habilitar el Pj2
opcionGameTwoPlayers.addEventListener('click', ()=>{
    document.body.style.overflowY = "scroll";
    containerGame.style.visibility = "visible";
    document.querySelector(".container-start").style.visibility = "hidden";
    gameModeTwoPlayers = true;
    gameWin = true;

    //ContainerButtons 
    containerButtons[1].style.display = 'inline';
    containerButtons[3].style.display = 'inline';

    botonGame.removeEventListener('click', resultWinBot)
    botonGame.addEventListener('click', resultWinPlayers);

    if(gameModeTwoPlayers){
        containerBot[1].classList.remove('diseableM');
        containerBot[3].classList.remove('diseableM');
        containerBot[5].classList.remove('diseableM');

        bot = false;

        document.querySelector('.container-opcion-bot').style.display = 'block';
        
        
        cleanGame();
        
    };
    botonRegresar.style.display = 'block';
   
    
    historyGame();
});



//--- Eleccion Modo de juego - PJ vs Bot
const containerPj = document.querySelector(".container-opcion-j1");
const containerRespuestaPj = document.querySelector(".opcion-pj");
const containerRespuestaPjChilds = containerRespuestaPj.childNodes;

const opcionsPj = containerPj.childNodes;
const opcionPj1 = opcionsPj[1];
const opcionPj2 = opcionsPj[3];
const opcionPj3 = opcionsPj[5];


let respuestaPj1 = 0;
 //Opciones DeL juego
opcionPj1.addEventListener('click',()=>{
    if(gameModeTwoPlayers == false){
        containerRespuestaPjChilds[1].src = "img/rock.png";
        containerRespuestaPjChilds[3].childNodes[1].textContent = "ROCK";
    }else if(gameModeTwoPlayers == true){
        containerRespuestaPjChilds[1].src = "img/respuestaPj.png";
        
    }
    respuestaPj1 = 1;
    
});

opcionPj2.addEventListener('click',()=>{
    if(gameModeTwoPlayers == false){
        containerRespuestaPjChilds[1].src = "img/paper.png";
        containerRespuestaPjChilds[3].childNodes[1].innerHTML = "PAPER";
        
    }else if(gameModeTwoPlayers == true){
        containerRespuestaPjChilds[1].src = "img/respuestaPj.png";
        
    }
    respuestaPj1 = 2;
    
    
});
opcionPj3.addEventListener('click',()=>{
    if(gameModeTwoPlayers == false){
        containerRespuestaPjChilds[1].src = "img/scissors.png";
        containerRespuestaPjChilds[3].childNodes[1].textContent = "SCISSORS";
    }else{
        containerRespuestaPjChilds[1].src = "img/respuestaPj.png";
    }
    respuestaPj1 = 3;
    

});
//--- Eleccion Modo de juego - PJ1 vs PJ2
const containerRespuestaPj2Childs = document.querySelector('.opcion-bot').childNodes;
const opcionsPj21 = containerBot[1];
const opcionsPj22 = containerBot[3];
const opcionsPj23 = containerBot[5];
let respuestaPj2 = 0;

opcionsPj21.addEventListener('click', ()=>{
    containerRespuestaBotChild[1].src = "img/respuestaPj.png";
    containerRespuestaBotChild[3].childNodes[1].textContent = "-  -  -";

    respuestaPj2 = 1;
    
})
opcionsPj22.addEventListener('click', ()=>{
    containerRespuestaBotChild[1].src = "img/respuestaPj.png";
    containerRespuestaBotChild[3].childNodes[1].textContent = "-  -  -";

    respuestaPj2 = 2;
    
})
opcionsPj23.addEventListener('click', ()=>{
    containerRespuestaBotChild[1].src = "img/respuestaPj.png";
    containerRespuestaBotChild[3].childNodes[1].textContent = "-  -  -";

    respuestaPj2 = 3;
    
})




//--- Elementos Bot
const containerMarker = document.querySelector(".container-marker");
const containerMarkerChild = containerMarker.childNodes;

const containerRespuestaBot = document.querySelector(".opcion-bot");
const containerRespuestaBotChild = containerRespuestaBot.childNodes;

// Comprobar resultado de Pj vs Pj2
const resultWinPlayers = () =>{
    //Jugador 1 Gana
    if (respuestaPj1 == 1 && respuestaPj2 == 3 || respuestaPj1 == 2 && respuestaPj2 == 1 || respuestaPj1 == 3 && respuestaPj2 == 2) {
        containerMarkerChild[1].style.visibility = 'visible';
        containerMarkerChild[3].style.visibility = 'visible';
        containerPj.style.select = 'none';

        gameWin = true;
        gameWinPj = true;

        containerMarkerChild[1].style.order = '1';
        
        buttonGameAgain.style.visibility = 'visible';
        
        containerReturnMarkerPj.innerHTML = ++markerPj;
        
    }
    //Jugador 2 Gana
    else if (respuestaPj1 == 3 && respuestaPj2 == 1 || respuestaPj1 == 1 && respuestaPj2 == 2 || respuestaPj1 == 2 && respuestaPj2 == 3) {
        containerMarkerChild[1].style.visibility = 'visible';
        containerMarkerChild[3].style.visibility = 'visible';
        
        containerMarkerChild[1].style.order = '2';
        
        gameWin = true;
        gameWinPj = false;
        containerPj.style.select = 'none';
        
        buttonGameAgain.style.visibility = 'visible';
        
        containerReturnMarkerBot.innerHTML = ++markerBot;
        
    }
    //Cuando los jugadores quedan en un empate
    else if(respuestaPj1  == respuestaPj2 ){
        containerMarkerChild[1].style.visibility = 'hidden';
        containerMarkerChild[3].style.visibility = 'hidden';
    }
    historyGame();

}

// Comprobar resultado de Pj vs Bot
const resultWinBot = () =>{
    //Cerbro del "Bot"
    if(bot){
        num = Math.random()*(4-1)+1;
        total = Math.floor(num);
    }
    
    //Cambia las imagenes de las Respuestas del bot de la pantalla de juego
    if(respuestaPj1 == 0){
        containerRespuestaBotChild[1].src = "img/interrogacion.png";
        containerRespuestaBotChild[3].childNodes[1].textContent = "?";
    }else if(total == 1){
        containerRespuestaBotChild[1].src = "img/rock.png";
        containerRespuestaBotChild[3].childNodes[1].textContent = "ROCK";
    }else if(total == 2){
        containerRespuestaBotChild[1].src = "img/paper.png";
        containerRespuestaBotChild[3].childNodes[1].textContent = "PAPER";
    }else if(total == 3){
        containerRespuestaBotChild[1].src = "img/scissors.png";
        containerRespuestaBotChild[3].childNodes[1].textContent = "SCISSORS";
    }
    
    //Cuando Gana el jugador 1
    if (respuestaPj1 == 1 && total == 3 || respuestaPj1 == 2 && total == 1 || respuestaPj1 == 3 && total == 2) {
        containerMarkerChild[1].style.visibility = 'visible';
        containerMarkerChild[3].style.visibility = 'visible';
        containerPj.style.select = 'none';

        gameWin = true;
        gameWinPj = true;

        containerMarkerChild[1].style.order = '1';
        
        buttonGameAgain.style.visibility = 'visible';
        
        containerReturnMarkerPj.innerHTML = ++markerPj;
        
    }
    //Cuando Gana el Bot
    else if (respuestaPj1 == 3 && total == 1 || respuestaPj1 == 1 && total == 2 || respuestaPj1 == 2 && total == 3) {
        
        containerMarkerChild[1].style.visibility = 'visible';
        containerMarkerChild[3].style.visibility = 'visible';
        
        containerMarkerChild[1].style.order = '2';
        
        gameWin = true;
        gameWinPj = false;
        containerPj.style.select = 'none'
        
        buttonGameAgain.style.visibility = 'visible';
        
        containerReturnMarkerBot.innerHTML = ++markerBot;
        
        
    }
    //Cuando los jugadores quedan en un empate
    else if(respuestaPj1  == total ){
        containerMarkerChild[1].style.visibility = 'hidden';
        containerMarkerChild[3].style.visibility = 'hidden';
    }
    
    if(gameWin){
        
        buttonGameAgain.style.visibility = 'visible';
      
    }

    historyGame();
    
}

//Cleaner Game
const cleanGame = () =>{
    //Sprites Defaul 
    containerRespuestaBotChild[1].src = "img/interrogacion.png";
    containerRespuestaBotChild[3].childNodes[1].textContent = "?";

    containerRespuestaPjChilds[1].src = "img/interrogacion.png";
    containerRespuestaPjChilds[3].childNodes[1].textContent = "?";

    markerPj = 0;
    markerBot = 0;
}

// History Game Preview - mostrar un marcador con el historial de las partidas y rondas jugadas
let roundNew = true;

const containerHistoryGame = document.querySelector(".container-history-game")
let fragmentLi = document.createDocumentFragment();

const historyGame = () =>{
    
    let li = document.createElement("LI");
    let imgPj = document.createElement("IMG");
    let span = document.createElement("SPAN");
    let imgBot = document.createElement("IMG");

    imgPj.src = containerRespuestaPjChilds[1].src;
    imgBot.src = containerRespuestaBotChild[1].src;

    let spanMarkerPj = document.createElement("SPAN")
    spanMarkerPj.textContent = markerPj;
    
    let spanMarkerBot = document.createElement("SPAN");
    spanMarkerBot.textContent = markerBot;

    li.appendChild(spanMarkerPj);
    li.appendChild(imgPj);
    li.appendChild(span);
    li.appendChild(imgBot);
    li.appendChild(spanMarkerBot);
    
    
    if(respuestaPj1 == 0 && numberRounds >= 0 && roundNew == true){
        span.textContent = ` - - - ${++numberRounds} - - - `
        fragmentLi.appendChild(span);

        roundNew = false;
        respuestaPj1 = 0;
    }else if(gameWin == true && gameWinPj == true && containerRespuestaPjChilds[1].src != "img/interrogacion.png"){
        span.textContent = "<--"
        fragmentLi.appendChild(li);

        gameWinPj = false;
        gameWin = false;
        roundNew = true;
    }else if(gameWin == true && gameWinPj == false && containerRespuestaPjChilds[1].src != "img/interrogacion.png"){
        span.textContent = "-->"
        fragmentLi.appendChild(li);

        gameWin = false;
        roundNew = true;
    }else if(gameWin == false && gameWinPj == false && respuestaPj1 != 0 && containerRespuestaPjChilds[1].src != "img/interrogacion.png"){
        span.textContent = "=="
        fragmentLi.appendChild(li);

    }

    

    containerHistoryGame.appendChild(fragmentLi);
    

}

//Boton Regresar

botonRegresar.childNodes[3].addEventListener('click', ()=>{
    gameModeTwoPlayers = false;
    containerGame.style.visibility = 'hidden';
    botonRegresar.style.display = 'none';
    document.querySelector(".container-start").style.visibility = "visible";

    containerMarkerChild[1].style.visibility = 'hidden';
    containerMarkerChild[3].style.visibility = 'hidden';
    containerButtons[1].style.display = 'none';
    containerButtons[3].style.display = 'none';

    numberRounds = 0;
    
    containerReturnMarkerPj.innerHTML = 0;
    containerReturnMarkerBot.innerHTML = 0;
    document.querySelector('.container-history-game').innerHTML = ` - - - ${++numberRounds} - - - `;
    cleanGame();

})


//Funcion Game Again
const buttonGameAgain = document.querySelector('.boton-game-again');
buttonGameAgain.addEventListener('click',()=>{
    gameWin = false;
    
    containerMarkerChild[1].style.visibility = 'hidden';
    containerMarkerChild[3].style.visibility = 'hidden';

    respuestaPj1 = 0;
    
    containerReturnMarkerPj.innerHTML = markerPj;
    containerReturnMarkerBot.innerHTML = markerPj;

    containerHistoryGame.textContent = " ";
    cleanGame();
    historyGame();

    


});


//--- Evento Funcion Del boton Jugar




//teo820 Office

//1000031570 afterEfeccts
//diegodeisy15 afterEfeccts