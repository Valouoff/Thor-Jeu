let lightX = 6;
let lightY = 8;
let initialTX = 10;
let initialTY = 7;

let piegeX = Math.floor((Math.random() * 40) + 1);
let piegeY = Math.floor((Math.random() * 40) + 1);
let piege2X = Math.floor((Math.random() * 40) + 1);
let piege2Y = Math.floor((Math.random() * 40) + 1);
let endGame = false;
let vies = 3;

// console.log(`Le premier piège se situe en ${piegeX} sur l'axe X et en ${piegeY} sur l'axe Y`);
// console.log(`Le deuxième piège se situe en ${piege2X} sur l'axe X et en ${piege2Y} sur l'axe Y`);
console.log(`la position de l'eclair est ${lightX} sur l'axe X et ${lightY} sur l'axe Y`);
console.log(`Nombre de vies : ${vies}`);


// let lightX = prompt (`Choisissez la position X de l'éclair`);
// let lightY = prompt (`Choisissez la position Y de l'éclair`);
// let initialTX = prompt (`Choisissez la position X de Thor`);
// let initialTY = prompt (`Choisissez la position Y de Thor`);

// if ((initialTX > 40) || (initialTX < 0) || (initialTY > 18) || (initialTY < 0) || (lightX > 40) || (lightX < 0) || (lightY > 18) || (lightY < 0)) {
//     alert(`Une ou plusieurs de vos positions se situe en dehors de la zone`);
//     let endGame = true;
//     location.reload();
// }

while (endGame == false) {

    console.log(`la position de thor est ${initialTX} sur l'axe X et ${initialTY} sur l'axe Y`);

    let direction = prompt("indiquer une direction : N, NE, E, SE, S, SW, W, NW");

    if (direction === "N") {

        initialTY++

    } else if (direction === "NE") {

        initialTY++
        initialTX++
        

    } else if (direction === "E") {

        initialTX++

    } else if (direction === "SE") {

        initialTY--
        initialTX++

    } else if (direction === "S") {

        initialTY--

    } else if (direction === "SW") {

        initialTY--
        initialTX--

    } else if (direction === "W") {

        initialTX--

    } else if (direction === "NW") {

        initialTY++
        initialTX--

    }

    if ((initialTX === lightX) && (initialTY === lightY)) {
        endGame = true;
        alert(`Bien joué vous avez trouver l'éclaire`);
    }

    if ((initialTX === piegeX) && (initialTY === piegeY) || (initialTX === piege2X) || (initialTY === piege2Y)) {
        vies--
        console.log(`Vous avez touché un piège... donc vous perdez une vie :(. Ile vous reste ${vies} vies`);
    }
    
    if (vies === 0 ){
        endGame = true;
        alert(`Vous avez perdu toutes vos vies, fin de partie !`)
        location.reload();
    }

    if ((initialTX > 40) || (initialTX < 0) || (initialTY > 18) || (initialTY < 0)) {
        endGame= true;
        alert(`Perdue, vous êtes sortie de la zone !`);
        location.reload();
    }

}