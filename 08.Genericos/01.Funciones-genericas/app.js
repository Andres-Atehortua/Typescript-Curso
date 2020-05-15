"use strict";
// No existe el concepto de genérico en javascript ya que todo en él es dinámico
// Para crear una funcion genérica debemos colocar <T> justo después del nombre de la función.
// La T es una convención para llamar a los genréricos
function regresar(arg) {
    return arg;
}
console.log(regresar(1.23456));
console.log(regresar("Heeeeeeeeeeeey").charAt(0));
console.log(regresar(new Date()).getDate());
console.log(regresar(["a", 2, 3]).join(", "));
function generica(somebody) {
    return somebody;
}
var deadpool = {
    nombre: "Deadpool",
    nombreReal: "Wade",
    poder: "Regeneracion",
};
var venom = {
    nombre: "Venom",
    poder: "Ser negro",
};
generica(deadpool); // Se puede especificar cómo queremos tratar el objeto, si de tipo Heroe o Villano
// Arrays
// Forma de definir un array generico de string
var villanos = ["Lex Luthor", "Venom"];
var heroes = ["Pikahcu", "Kratos"];
