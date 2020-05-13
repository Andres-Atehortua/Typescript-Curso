// Actualmente está permitido usar let y const. Y es mejor no usar var.
// let tiene scope en el ámbito donde está declarada y no se puede redeclarar pero si modificar.
// const por convencion se escribe en mayúsculas y no puede ser ni redeclarada ni modificada.
// Salvo las propiedades de los objetos.

// Los templates literales están permitidos en typescript. Y se usan con los backticks ``

// Las funciones de flecha también están permitidas.

// La destructuración de objetos y arreglos también está permitida

// El ciclo for of de los arreglos, también está permitido.

// Las clases también están permitidas en typescript

//EJERCICIOS

// Convierta este archivo de ES5 a ES6 - JavaScript 2015
// OJO: No es a TypeScript, solo JAVASCRIPT

// ==============================
//  Spiderman info
// ==============================
// Constantes?
const HEROE = "Spiderman";

// Declaracion de variables?
let spiderman = "Peter Parker",
  venom = "Eddie Brock";

// Destructuracion de arreglos?
let versiones = ["Spider-Man 2099", "Spider-Girl", "Ultimate Spider-Man"];

let [spiderman2099, spidergirl, ultimate] = versiones;

// Destructuracion de objetos?
let villanos = {
  venom: "Eddie Brock",
  carnage: "Cletus Kasady",
  sandman: "William Baker",
};
let { carnage: carn, venom: ven, sandman: sand } = villanos;
venom = ven;
let carnage = carn;
let sandman = sand;

// Ciclo for Of?
for (let spider in versiones) {
  console.log(spider);
}
