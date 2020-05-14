// Las interfaces no existen en javascript

interface Xmen {
  nombre: string;
  poder?: string; // Al no usarse esta propiedad podemos ponerla como opcional para no generar errores
  regenerar(nombreReal: string): void;
}

// Sin interface
// function enviarMision(Xmen: { nombre: string }): void {
//   console.log(`Enviando a ${Xmen.nombre}`);
// }

// function enviarCuartel(Xmen: { nombre: string }) {
//   console.log(`Enviando al cuartel a ${Xmen.nombre}`);
// }(

//Con Interface
function enviarMision(xmen: Xmen): void {
  console.log(`Enviando a ${xmen.nombre}`);
  xmen.regenerar("Logan");
}

function enviarCuartel(xmen: Xmen) {
  console.log(`Enviando al cuartel a ${xmen.nombre}`);
}

// Si este objeto cambiara la propiedad nombre, las funciones dejarían de funcionar correctamente.
// Ante esta problemática surgen las interfaces
let wolverine: Xmen = {
  // Aquí se especifica que la variable es de tipo Xmen (interface)
  nombre: "Wolverine",
  //   poder: "Regeneración",
  regenerar(name: string) {
    console.log(`${name} se ha regenerado`);
  },
};

enviarMision(wolverine);
enviarCuartel(wolverine);
