"use strict";
let vies = 0;
let nbPieges = 0;
let nbObstacles = 0;
//-------CHOIX DIFFICULTE
let difficulte = prompt(`Choisissez votre difficulté : Facile, Normal, Hardcore`).toLowerCase()

if (difficulte === "facile") {
    nbPieges = Math.floor(Math.random()* 2) + 2;
    nbObstacles = Math.floor(Math.random()* 10) + 30;
    vies = 5;
    console.error(`Vous avez choisi la dificulté "Facile"`)
} else if (difficulte === "normal") {
    nbPieges = Math.floor(Math.random()* 8) + 10;
    nbObstacles = Math.floor(Math.random()* 15) + 35;
    vies = 3;
    console.error(`Vous avez choisi la difficulté "Normal"`);
    
} else if (difficulte === "hardcore") {
    nbPieges = Math.floor(Math.random()* 15) + 20;
    nbObstacles = Math.floor(Math.random()* 20) + 40;
    vies = 1;
    console.error(`Vous avez choisi la difficulté "Hardcore"`);
} else {
    alert("Veuillez rentrer une difficulté valide !")
    location.reload();
}

//-------POSITIONS DE THOR ET ECLAIR
let lightX = 0;
let lightY = 0;
let initialTX = 0;
let initialTY = 0;
let endGame = false;

function getRandomX(max) {
  return Math.floor(Math.random() * max);
}

function getRandomY(max) {
  return Math.floor(Math.random() * max);
}

initialTX = getRandomX(40);
initialTY = getRandomY(18);
lightX = getRandomX(40);
lightY = getRandomY(18);

//-------POSITIONS DE THANOS

let thanosPositionXY = [];

function thanosPosition(nombre) {
    for (let i = 0 ; i < nombre ; i++) {
        thanosX = getRandomX(40);
        thanosY = getRandomY(18);
        thanosPositionXY.push([thanosX, thanosY])
    }
    if ((thanosX > 40) || (thanosX < 0) || (thanosY > 18) || (thanosY < 0)) {
        console.warn("thanos est sortie du plateau");
    }
}

let thanosX = lightX -1;
let thanosY = lightY -1;
if ((thanosX > 40) || (thanosX < 0) || (thanosY > 18) || (thanosY < 0)) {
    console.warn("thanos à spawn en dehors du plateau");
    thanosX = lightX +1;
    thanosY = lightY +1;
}

//-------POSITIONS DES PIEGES ET OBSTACLES

let pieges = [];

function allPieges(nombre) {
    for (let i = 0 ; i < nombre ; i++) {
        let piegeX = getRandomX(40);
        let piegeY = getRandomY(18);
        pieges.push([piegeX, piegeY])
    }
}

allPieges(nbPieges);
// console.log("Les pièges", pieges);

//----OBSTACLES

let obstacles = [];

function allObstacles(nombre) {
    for (let i = 0 ; i < nombre ; i++) {
        let obstaclesX = getRandomX(40);
        let obstaclesY = getRandomY(18);
        obstacles.push([obstaclesX, obstaclesY])      
    }
}

allObstacles(nbObstacles)
// console.log("Les obstacles", obstacles);

//-------JEUX

console.log(`Nombre de vies : ${vies}`);
console.log(`la position de l'eclair est ${lightX} sur l'axe X et ${lightY} sur l'axe Y`);

while (!endGame) {

    console.log(`la position de Thanos est ${thanosX} sur l'axe X et ${thanosY} sur l'axe Y`);
    console.log(`la position de Thor est ${initialTX} sur l'axe X et ${initialTY} sur l'axe Y`);
    let direction = prompt("indiquer une direction : N, NE, E, SE, S, SW, W, NW").toLowerCase();

    if (direction === "n") {
        initialTY--
    } else if (direction === "ne") {
        initialTY--
        initialTX++
    } else if (direction === "e") {
        initialTX++
    } else if (direction === "se") {
        initialTY++
        initialTX++
    } else if (direction === "s") {
        initialTY++
    } else if (direction === "sw") {
        initialTY++
        initialTX--
    } else if (direction === "w") {
        initialTX--
    } else if (direction === "nw") {
        initialTY--
        initialTX--
    }

    if ((initialTX === lightX) && (initialTY === lightY)) {
        endGame = true;
        alert(`Bien joué vous avez trouver l'éclaire`);
    }

    for (let i = 0 ; i < pieges.length ; i++) {
        if (initialTX === pieges[i][0] && initialTY === pieges[i][1]) {
            vies--
            console.error(`Vous avez touché un piège... donc vous perdez une vie :(. Ils vous reste ${vies} vies`);
            if (vies === 0 ){
                endGame = true;
                alert(`Vous avez perdu toutes vos vies, fin de partie !`)
                location.reload();
            }
        }
    }

    for (let i = 0 ; i < obstacles.length ; i++) {
        if (initialTX === obstacles[i][0] && initialTY === obstacles[i][1]) {
            console.warn(`Vous ne pouvez pas passer il y à un obstacle`)
            if (direction === "n") {
                initialTY++
            } else if (direction === "ne") {
                initialTY++
                initialTX--
            } else if (direction === "e") {
                initialTX--
            } else if (direction === "se") {
                initialTY--
                initialTX--
            } else if (direction === "s") {
                initialTY--
            } else if (direction === "sw") {
                initialTY--
                initialTX++
            } else if (direction === "w") {
                initialTX++
            } else if (direction === "nw") {
                initialTY++
                initialTX++
            }
        }
    }

    thanosPosition(1);

    if ((initialTX > 40) || (initialTX < 0) || (initialTY > 18) || (initialTY < 0)) {
        endGame = true;
        alert(`Perdue, vous êtes sortie de la zone !`);
        location.reload();
    }

    if ((initialTX === thanosX) || (initialTY === thanosY)) {
        endGame = true;
        alert(`Perdue, Thanos vous a trouvé !`);
        location.reload();
    }
}

