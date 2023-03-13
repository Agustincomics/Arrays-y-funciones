/*Escribir el código de una función
a la que se pasa como parámetro un número entero 
y devuelve como resultado una cadena de texto 
que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función. */

let num = prompt("Ingrese un numero entero");

const parOImpar = function(num){
    if (num%2 == 0) {
        document.write("Es PAR");
    } else {
        document.write("Es IMPAR");
    }
}

parOImpar(num);