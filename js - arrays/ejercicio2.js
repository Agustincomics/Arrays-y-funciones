/*solicite al usuario mediante un prompt el nombre de ciudades
y almacenarlas en un arreglo,
cuando el usuario selecciona cancelar se debe mostrar el arreglo generado,
luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
  */

let ciudades = [];
let agrego = prompt("Ingrese el nombre de una ciudad");


while (agrego !== null) {
    ciudades.push(agrego);
    agrego = prompt("Ingrese el nombre de una ciudad");
}

for (let i = 0; i < ciudades.length; i++) {
    document.write(ciudades[i] + ", ");
}

document.write("<br>");
document.write((ciudades.length));

document.write("<br>");
document.write("Primera posicion " + ciudades[0]);
document.write("<br>");
document.write("Tercera posicion " + ciudades[2]);
document.write("<br>");
document.write("Ultima posicion " + ciudades[ciudades.length - 1]);

document.write("<br>");
ciudades.push("Paris");
for (let i = 0; i < ciudades.length; i++) {
    document.write(ciudades[i] + ", ");
}

document.write("<br>");
document.write("Segunda posicion " + ciudades[1]);

document.write("<br>");
ciudades.splice(1, 1, "Barcelona");
for (let i = 0; i < ciudades.length; i++) {
    document.write(ciudades[i] + ", ");
}