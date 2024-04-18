const leer = require("prompt-sync")();

//Crear un juego para adivinar el número secreto definido dentro del programa donde el usuario tendrá 3 intentos

const numSecreto = 47
const MAX_INTENTOS = 3


console.log("Adivina el número secreto!!! Tienes 3 chances");

for (let i = 1; i <= MAX_INTENTOS; i++) {
    let numIngresado = Number(leer());
    if (numIngresado == numSecreto) {
        console.log("Bravo, adivinaste!!!");
        i = 3
    }
    if (i != MAX_INTENTOS) {
        console.log("Intenta otra vez!");

    }
}


