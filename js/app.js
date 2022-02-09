
//--- Elementos Start Game
const opcionGame = document.querySelector(".container-start-buttons");
const containerGame = document.querySelector(".container-game");
const botonRegresar = document.querySelector('.container-return');

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
    if(gameModeTwoPlayers == false){
        containerBot[1].classList.add('diseableM');
        containerBot[3].classList.add('diseableM');
        containerBot[5].classList.add('diseableM');
        bot = true;
    };
});

//Funcion para habilitar el Pj2
opcionGameTwoPlayers.addEventListener('click', ()=>{
    containerGame.style.visibility = "visible";
    document.querySelector(".container-start").style.visibility = "hidden";
    gameModeTwoPlayers = true;
    if(gameModeTwoPlayers){
        containerBot[1].classList.remove('diseableM');
        containerBot[3].classList.remove('diseableM');
        containerBot[5].classList.remove('diseableM');
        bot = false;
    }
    botonRegresar.style.display = 'block';
});


//Boton Regresar

botonRegresar.addEventListener('click', ()=>{
    containerGame.style.visibility = 'hidden';
    botonRegresar.style.display = 'none';
    document.querySelector(".container-start").style.visibility = "visible";

})

//--- Elementos PJ
const containerRespuestaPj = document.querySelector(".opcion-pj");
const containerRespuestaPjChilds = containerRespuestaPj.childNodes;
const containerPj = document.querySelector(".container-opcion-j1");

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

const containerRespuestaBot = document.querySelector(".opcion-bot");
const containerRespuestaBotChild = containerRespuestaBot.childNodes;
let gameWin = false

const cargarBot = () =>{
    num = Math.random()*(4-1)+1
    total = Math.floor(num)
    console.log(total)
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
        document.querySelector(".container-marker").style.visibility = 'visible';
        gameWin = true   
    }
}


//--- Boton Jugar
const botonGame = document.querySelector(".boton-jugar");
botonGame.addEventListener('click',cargarBot);
// botonGame.addEventListener('click', jugar());