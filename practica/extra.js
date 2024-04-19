const leer = require("prompt-sync")();

//Extra: Crear un juego para adivinar el número secreto generado aleatoriamente en un rango del cero al doble de la cantidad de intentos que desea tener el usuario, considerar que la cantidad mínima de intentos es 3 por ende el rango mínimo del número secreto es de 0 a 6

const MIN_INTENTOS = 3;
const MAX_INTENTOS = MIN_INTENTOS * 2;
const numIncógnito = MAX_INTENTOS - MIN_INTENTOS

console.log("Adivina el nro secreto; pista: el nro secreto está entre 0 y el duplicado de intentos que vos elijas");
console.log("Ingresa un número de intentos mayor a 3");
let intentos = Number (leer());
for (let i = 3; i <= MAX_INTENTOS; i++) {
    let numIncógnito = Number(leer());
    ;
     if (intentos >3<=50) {
        console.log("Tenes que adivinar numero",  numIncógnito);
     } if (intentos <3) {
        console.log("sólo se puede ingresar un nro de intentos mayor a 3");
     }
     else if (intentos >=3) {
        "Tenes que adivinar número entre ", numIncógnito;
        
     } else {
        
     }
    }
    
    
