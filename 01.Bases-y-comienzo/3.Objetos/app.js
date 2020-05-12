//OBJECTS
// Para declarar una variable de tipo objeto, previamente deberíamos decir cómo va a ser el objeto.
// El orden de las propiedades no importa pero si el nombre de las mismas.
// Esta forma de declarar e inicializar un objeto es correcta pero tediosa y repetitiva si se quieren declarar
// más objetos que comparten la misma estructura.
var juan = {
    name: "Juan",
    age: 25,
    isTall: true,
    hobbies: ["Run", "Read", "Fly"],
    getName: function () {
        return this.name;
    }
};
// Crear objeto usando el tipo Card
var bmw = {
    brand: "BMW",
    color: "Blue",
    year: 2005,
    doors: 4,
    isNew: false,
    owners: ["Juan", "Carlos"],
    getBrand: function () {
        return this.brand;
    }
};
// Si queremos declarar una variable y queremos añadir flexibilidad a su contenido podemos decir que puede
// ser de un tipo u otro utilizando |
var numOrString = 20; // Estas tres opciones son válidas
numOrString = "Soy un string"; // Estas tres opciones son válidas
numOrString = 1; // Estas tres opciones son válidas
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        // El metodo disparar es opcional
        console.log("Disparando");
    }
};
var villanos = [
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    },
    {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    },
    {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    },
];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
var mystique;
mystique = charles;
mystique = apocalipsis;
