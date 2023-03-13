/*Solicitar por pantalla al usuario 
ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
 */

let ladoL = parseInt(prompt("Ingrese el lado largo de un rectangulo"));
let ladoC = parseInt(prompt("Ingrese el lado corto de un rectangulo"));

function perimetroRectangulo(lado1, lado2) {
    document.write("El perimetro del rectangulo es " + 2*(lado1 + lado2));
}

perimetroRectangulo(ladoL, ladoC);