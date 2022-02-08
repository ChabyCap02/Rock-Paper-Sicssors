
//--- Elementos Start Game
const opcionGame = document.querySelector(".container-start-buttons");
const containerGame = document.querySelector(".container-game");
const botonRegresar = document.querySelector('.container-return');

const opcionGamePlayer = opcionGame.childNodes[1];
const opcionGameTwoPlayers = opcionGame.childNodes[3];
let gameModeTwoPlayers = false;

opcionGamePlayer.addEventListener("click", ()=>{
    containerGame.style.visibility = "visible";
    document.querySelector(".container-start").style.visibility = "hidden";
    gameModeTwoPlayers = false;
    botonRegresar.style.display = 'block';

});
opcionGameTwoPlayers.addEventListener('click', ()=>{
    containerGame.style.visibility = "visible";
    document.querySelector(".container-start").style.visibility = "hidden";
    gameModeTwoPlayers = true;
    if(gameModeTwoPlayers){
        const hola = document.querySelector('.container-opcion-bot').childNodes
        hola[1].classList.toggle('diseableM');
        hola[3].classList.toggle('diseableM');
        hola[5].classList.toggle('diseableM');
    }
    botonRegresar.style.display = 'block';
});
botonRegresar.addEventListener('click', ()=>{
    containerGame.style.visibility = 'hidden';
    botonRegresar.style.display = 'none';
})


//Funcion para habilitar el Pj2

//Boton Regresar


//--- Elementos PJ
const containerRespuestaPj = document.querySelector(".opcion-pj");
const containerPj = document.querySelector(".container-opcion-j1");

const opcionsPj = containerPj.childNodes;






//--- Elementos Bot
const Bot = false


//--- Boton Jugar
const botonGame = document.querySelector(".boton-jugar");


// botonGame.addEventListener('click', jugar());