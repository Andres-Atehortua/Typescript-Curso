// Functions

// Funciones básicas.
let hero: string = "Flash";

// Le decimos a la función que lo que retorne debe ser de tipo string
function printHero(): string {
  return hero;
}

function activateBomb(): string {
  return "Bomba activada.";
}

// console.log(printHero());
// console.log(activateBomb());

// PARAMETROS OBLIGATORIOS - Dentro de las funciones podemos decir el tipo de argumento que se espera obtener.

// En esta función los parámetros son obligatorios.
function fullName(name: string, lastName: string): string {
  return `${name} ${lastName}`;
}

let myName: string = fullName("Andrés", "López");
// console.log(myName) // Andrés López

// PARAMETROS OPCIONALES - En esta función el parámetro lastName es opcional ya que usa ?

function fullName2(name: string, lastName?: string) {
  if (name && lastName) {
    return name + " " + lastName;
  } else {
    return name;
  }
}

let myName2: string = fullName2("Juan");
// console.log(myName2); // Juan undefined

// PARAMETROS POR DEFECTO - Esta función tiene el parámetro capitalized por defecto al usar = en la declaración

function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}

function fullName3(
  name: string,
  lastName: string,
  capitalized: boolean = true
) {
  if (capitalized) {
    return capitalize(name) + " " + capitalize(lastName);
  } else {
    return name + " " + lastName;
  }
}
// console.log(fullName3("andrés", "felipe")); // Capitalizando por defecto
// console.log(fullName3("aNdRés", "fELipe", false)); // Sin modificar nada

// PARAMETROS REST - Al igual que en el ECMAScript 6 en typescript se puede usar el parámeto rest.

function showNames(name: string, ...restNames: string[]): string {
  return `Este nombre es el parámetro obligatorio ${name}. 
  Y estos otros son parámetros rest: ${restNames.join(", ")}`;
}

let allNames: string = showNames("andres", "juan", "lucas", "ricardo");
// console.log(allNames);

// VARIABLE TIPO FUNCIÓN

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

function greet(name: string): string {
  return `Hello ${name}`;
}

function showDay(): void {
  return console.log(new Date().getDate());
}

// Para las variables de tipo función, le podemos asignar la cantidad de parámetros que va a recibir,
// el tipo de dato que va a ser cada parámetro y el tipo de dato que va a ser el retorno de la función

// En esta función le decimos que debe tener dos parámetros de tipo number y su retorno sea number
let myFunction: (a: number, b: number) => number;
myFunction = sum; // Esta asignación cumple con los requisitos.
// console.log(myFunction(2, 2)); //4

// En esta función le decimos que debe tener un parámetro de tipo string y su retorno sea string
let myFunction2: (a: string) => string = greet;
// console.log(myFunction2("Rigoberto")); // Hello Rigoberto

// En esta función le decimos que no debe tener parámetros y no retorna ningún valor
let myFunction3: () => void = showDay;
// myFunction3()

//EJERCICIOS

// Funciones Básicas
function sumar(a: number, b: number): number {
  return a + b;
}

let contar: (a: string[]) => number = function (heroes: string[]): number {
  return heroes.length;
};
let superHeroes: string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

//Parametros por defecto
function llamarBatman(llamar: boolean = true): void {
  if (llamar) {
    console.log("Batiseñal activada");
  }
}

llamarBatman();

// Rest?
function unirheroes(...personas: string[]): string {
  return personas.join(", ");
}

// Tipo funcion
function noHaceNada(
  numero: number,
  texto: string,
  booleano: boolean,
  arreglo: any[]
): void {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (
  a: number,
  b: string,
  c: boolean,
  d: any[]
) => void = noHaceNada;
