"use strict";
// Las interfaces no existen en javascript
// Sin interface
// function enviarMision(Xmen: { nombre: string }): void {
//   console.log(`Enviando a ${Xmen.nombre}`);
// }
// function enviarCuartel(Xmen: { nombre: string }) {
//   console.log(`Enviando al cuartel a ${Xmen.nombre}`);
// }(
//Con Interface
function enviarMision(xmen) {
    console.log("Enviando a " + xmen.nombre);
    xmen.regenerar("Logan");
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel a " + xmen.nombre);
}
// Si este objeto cambiara la propiedad nombre, las funciones dejarían de funcionar correctamente.
// Ante esta problemática surgen las interfaces
var wolverine = {
    // Aquí se especifica que la variable es de tipo Xmen (interface)
    nombre: "Wolverine",
    //   poder: "Regeneración",
    regenerar: function (name) {
        console.log(name + " se ha regenerado");
    },
};
enviarMision(wolverine);
enviarCuartel(wolverine);
