// Functions
// Funciones básicas.
var hero = "Flash";
// Le decimos a la función que lo que retorne debe ser de tipo string
function printHero() {
    return hero;
}
function activateBomb() {
    return "Bomba activada.";
}
// console.log(printHero());
// console.log(activateBomb());
// PARAMETROS OBLIGATORIOS - Dentro de las funciones podemos decir el tipo de argumento que se espera obtener.
// En esta función los parámetros son obligatorios.
function fullName(name, lastName) {
    return name + " " + lastName;
}
var myName = fullName("Andrés", "López");
// console.log(myName) // Andrés López
// PARAMETROS OPCIONALES - En esta función el parámetro lastName es opcional ya que usa ?
function fullName2(name, lastName) {
    if (name && lastName) {
        return name + " " + lastName;
    }
    else {
        return name;
    }
}
var myName2 = fullName2("Juan");
// console.log(myName2); // Juan undefined
// PARAMETROS POR DEFECTO - Esta función tiene el parámetro capitalized por defecto al usar = en la declaración
function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}
function fullName3(name, lastName, capitalized) {
    if (capitalized === void 0) { capitalized = true; }
    if (capitalized) {
        return capitalize(name) + " " + capitalize(lastName);
    }
    else {
        return name + " " + lastName;
    }
}
// console.log(fullName3("andrés", "felipe")); // Capitalizando por defecto
// console.log(fullName3("aNdRés", "fELipe", false)); // Sin modificar nada
// PARAMETROS REST - Al igual que en el ECMAScript 6 en typescript se puede usar el parámeto rest.
function showNames(name) {
    var restNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restNames[_i - 1] = arguments[_i];
    }
    return "Este nombre es el par\u00E1metro obligatorio " + name + ". \n  Y estos otros son par\u00E1metros rest: " + restNames.join(", ");
}
var allNames = showNames("andres", "juan", "lucas", "ricardo");
// console.log(allNames);
// VARIABLE TIPO FUNCIÓN
function sum(num1, num2) {
    return num1 + num2;
}
function greet(name) {
    return "Hello " + name;
}
function showDay() {
    return console.log(new Date().getDate());
}
// Para las variables de tipo función, le podemos asignar la cantidad de parámetros que va a recibir,
// el tipo de dato que va a ser cada parámetro y el tipo de dato que va a ser el retorno de la función
// En esta función le decimos que debe tener dos parámetros de tipo number y su retorno sea number
var myFunction;
myFunction = sum; // Esta asignación cumple con los requisitos.
// console.log(myFunction(2, 2)); //4
// En esta función le decimos que debe tener un parámetro de tipo string y su retorno sea string
var myFunction2 = greet;
// console.log(myFunction2("Rigoberto")); // Hello Rigoberto
// En esta función le decimos que no debe tener parámetros y no retorna ningún valor
var myFunction3 = showDay;
// myFunction3()
//EJERCICIOS
// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
//Parametros por defecto
function llamarBatman(llamar) {
    if (llamar === void 0) { llamar = true; }
    if (llamar) {
        console.log("Batiseñal activada");
    }
}
llamarBatman();
// Rest?
function unirheroes() {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
}
// Tipo funcion
function noHaceNada(numero, texto, booleano, arreglo) { }
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
var noHaceNadaTampoco = noHaceNada;
