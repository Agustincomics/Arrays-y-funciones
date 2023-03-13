/*Definir una función 
que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, 
la función determina si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas. */

let frase = prompt("Ingrese una frase");
let mayuscula = 0;
let minuscula = 0;

function informacion(frase) {
    
    for (let i = 0; i < frase.length; i++) {
        document.write(frase[i]);
        if (frase[i] === frase[i].toUpperCase()) {
            mayuscula = 1;
        } else {
            minuscula = 1;
        }
    }

    document.write("<br>")

    if (mayuscula === 1 && minuscula === 1) {
        document.write("Es una MEZCLA");
    } else if (mayuscula === 1 && minuscula === 0) {
        document.write("Es una frase en MAYUSCULAS");
    } else if (minuscula === 1 && mayuscula === 0) {
        document.write("Es una frase en MINUSCULAS");
    }

} 

informacion(frase);