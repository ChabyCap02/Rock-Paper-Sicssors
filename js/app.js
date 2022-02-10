let gameWin = false;
let gameWinPj = false;

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

//Opcion Jugador Pj
opcionGamePlayer.addEventListener("click", ()=>{
    containerGame.style.visibility = "visible";
    document.querySelector(".container-start").style.visibility = "hidden";
    gameModeTwoPlayers = false;
    botonRegresar.style.display = 'block';
    gameWin = false

    containerButtons[1].style.display = 'inline';
    containerButtons[3].style.display = 'inline';

    //Sprites Defaul
    containerRespuestaBotChild[1].src = "img/interrogacion.png";
    containerRespuestaBotChild[3].childNodes[1].textContent = "?";

    containerRespuestaPjChilds[1].src = "img/interrogacion.png";
    containerRespuestaPjChilds[3].childNodes[1].textContent = "?";
    // Desactive Mode Two Players
    if(gameModeTwoPlayers == false){
        containerBot[1].classList.add('diseableM');
        containerBot[3].classList.add('diseableM');
        containerBot[5].classList.add('diseableM');
        bot = true;
        document.querySelector('.container-opcion-bot').style.display = 'none';
        
    };
});

//Funcion para habilitar el Pj2
opcionGameTwoPlayers.addEventListener('click', ()=>{
    containerGame.style.visibility = "visible";
    document.querySelector(".container-start").style.visibility = "hidden";
    gameModeTwoPlayers = true;

    //ContainerButtons 
    containerButtons[1].style.display = 'inline';
    containerButtons[3].style.display = 'inline';

    if(gameModeTwoPlayers){
        containerBot[1].classList.remove('diseableM');
        containerBot[3].classList.remove('diseableM');
        containerBot[5].classList.remove('diseableM');
        bot = false;

        document.querySelector('.container-opcion-bot').style.display = 'block';
    }
    botonRegresar.style.display = 'block';
});


//Boton Regresar

botonRegresar.addEventListener('click', ()=>{
    containerGame.style.visibility = 'hidden';
    botonRegresar.style.display = 'none';
    document.querySelector(".container-start").style.visibility = "visible";

    containerMarkerChild[1].style.visibility = 'hidden';
    containerMarkerChild[3].style.visibility = 'hidden';
    containerButtons[1].style.display = 'none';
    containerButtons[3].style.display = 'none';

})

//--- Elementos PJ
const containerPj = document.querySelector(".container-opcion-j1");
const containerRespuestaPj = document.querySelector(".opcion-pj");
const containerRespuestaPjChilds = containerRespuestaPj.childNodes;

const opcionsPj = containerPj.childNodes;
const opcionPj1 = opcionsPj[1];
const opcionPj2 = opcionsPj[3];
const opcionPj3 = opcionsPj[5];

let eleccionPj = 0;

opcionPj1.addEventListener('click',()=>{
    containerRespuestaPjChilds[1].src = "img/rock.png";
    containerRespuestaPjChilds[3].childNodes[1].textContent = "ROCK";
    eleccionPj = 1;
});
opcionPj2.addEventListener('click',()=>{
    containerRespuestaPjChilds[1].src = "img/paper.png";
    containerRespuestaPjChilds[3].childNodes[1].textContent = "PAPER";
    eleccionPj = 2;
    
});
opcionPj3.addEventListener('click',()=>{
    containerRespuestaPjChilds[1].src = "img/scissors.png";
    containerRespuestaPjChilds[3].childNodes[1].textContent = "SCISSORS";
    eleccionPj = 3;

});



//--- Elementos Bot
const containerMarker = document.querySelector(".container-marker");
const containerMarkerChild = containerMarker.childNodes;

const containerRespuestaBot = document.querySelector(".opcion-bot");
const containerRespuestaBotChild = containerRespuestaBot.childNodes;

//Funcion Game Again
const buttonGameAgain = document.querySelector('.boton-game-again');
buttonGameAgain.addEventListener('click',()=>{
    gameWin = false;
    containerRespuestaBotChild[1].src = "img/interrogacion.png";
    containerRespuestaBotChild[3].childNodes[1].textContent = "?";

    containerMarkerChild[1].style.visibility = 'hidden';
    containerMarkerChild[3].style.visibility = 'hidden';

    

    containerRespuestaPjChilds[1].src = "img/interrogacion.png";
    containerRespuestaPjChilds[3].childNodes[1].textContent = "?";

    markerPj, markerBot = 0,0;
    
    containerReturnMarkerPj.innerHTML = markerPj;
    containerReturnMarkerBot.innerHTML = markerPj;

    fragmentLi.textContent = " ";
    historyGame();

});


const cargarBot = () =>{
    num = Math.random()*(4-1)+1;
    total = Math.floor(num);
    console.log(total);
    
    
    if(eleccionPj == 0){
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
    
    
    if (eleccionPj == 1 && total == 3 || eleccionPj == 2 && total == 1 || eleccionPj == 3 && total == 2) {
        console.log("Ganaste");
        containerMarkerChild[1].style.visibility = 'visible';
        containerMarkerChild[3].style.visibility = 'visible';
        containerPj.style.select = 'none';

        gameWin = true;
        gameWinPj = true;

        containerMarkerChild[1].style.order = '1';
        
        buttonGameAgain.style.visibility = 'visible';
        
        containerReturnMarkerPj.innerHTML = ++markerPj;
        
    }else if (eleccionPj == 3 && total == 1 || eleccionPj == 1 && total == 2 || eleccionPj == 2 && total == 3) {
        console.log("Perdiste");
        containerMarkerChild[1].style.visibility = 'visible';
        containerMarkerChild[3].style.visibility = 'visible';
        
        containerMarkerChild[1].style.order = '2';
        
        gameWin = true;
        gameWinPj = false;
        containerPj.style.select = 'none'
        
        buttonGameAgain.style.visibility = 'visible';
        
        
        containerReturnMarkerBot.innerHTML = ++markerBot;
        
        
    }else if(eleccionPj  == total ){
        containerMarkerChild[1].style.visibility = 'hidden';
        containerMarkerChild[3].style.visibility = 'hidden';
    }
    
    if(gameWin){
        
        buttonGameAgain.style.visibility = 'visible';
      
    }

    historyGame();
    
}

// History Game Preview

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


    if(imgPj.src == "/img/interrogacion.png"){
        fragmentLi.appendChild('GAy');
    }else if(gameWin == true && gameWinPj == true){
        span.textContent = "<--"
        fragmentLi.appendChild(li);

        gameWinPj = false;
        gameWin = false;
    }else if(gameWin == true && gameWinPj == false){
        span.textContent = "-->"
        fragmentLi.appendChild(li);

        gameWin = false;
    }else if(gameWin == false && gameWinPj == false ){
        span.textContent = "==="
        fragmentLi.appendChild(li);
    }

    console.log(fragmentLi);

    document.querySelector(".container-history-game").appendChild(fragmentLi);
}

historyGame();


//--- Boton Jugar
const botonGame = document.querySelector(".boton-jugar");
botonGame.addEventListener('click',cargarBot);
