
//--- Elementos Start Game
const opcionGame = document.querySelector(".container-start-buttons");
const containerGame = document.querySelector(".container-game");

const opcionGamePlayer = opcionGame.childNodes[1];
const opcionGameTwoPlayers = opcionGame.childNodes[3];
let gameModeTwoPlayers = false;

opcionGamePlayer.addEventListener("click", ()=>{
    containerGame.style.visibility = "visible";
    document.querySelector(".container-start").style.visibility = "hidden";
    gameModeTwoPlayers = false;
});
opcionGameTwoPlayers.addEventListener('click', ()=>{
    containerGame.style.visibility = "visible";
    document.querySelector(".container-start").style.visibility = "hidden";
    gameModeTwoPlayers = true;
    if(gameModeTwoPlayers){
        const hola = document.querySelector('.container-opcion-bot .card-element').classList.toggle('diseableM')
        console.log(hola)
    }
});
//Funcion para habilitar el Pj2


//--- Elementos PJ
const containerRespuestaPj = document.querySelector(".opcion-pj");
const containerPj = document.querySelector(".container-opcion-j1");

const opcionsPj = containerPj.childNodes;






//--- Elementos Bot
const Bot = false


//--- Boton Jugar
const botonGame = document.querySelector(".boton-jugar");


// botonGame.addEventListener('click', jugar());