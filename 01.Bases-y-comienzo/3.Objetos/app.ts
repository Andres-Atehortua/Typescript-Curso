//OBJECTS

// Para declarar una variable de tipo objeto, previamente deberíamos decir cómo va a ser el objeto.
// El orden de las propiedades no importa pero si el nombre de las mismas.

// Esta forma de declarar e inicializar un objeto es correcta pero tediosa y repetitiva si se quieren declarar
// más objetos que comparten la misma estructura.
let juan: {
  name: string;
  hobbies: string[];
  age: number;
  isTall: boolean;
  getName: () => string;
} = {
  name: "Juan",
  age: 25,
  isTall: true,
  hobbies: ["Run", "Read", "Fly"],
  getName() {
    return this.name;
  },
};

// TIPOS PERSONALIZADOS DE OBJETOS

// Para crear la definición de un tipo usamos la palabra reservada type

type Car = {
  color: string;
  year: number;
  isNew: boolean;
  doors: number;
  brand: string;
  owners: string[];
  getBrand: () => string;
};

// Crear objeto usando el tipo Card

let bmw: Car = {
  brand: "BMW",
  color: "Blue",
  year: 2005,
  doors: 4,
  isNew: false,
  owners: ["Juan", "Carlos"],
  getBrand() {
    return this.brand;
  },
};

// Si queremos declarar una variable y queremos añadir flexibilidad a su contenido podemos decir que puede
// ser de un tipo u otro utilizando |

let numOrString: number | string = 20; // Estas tres opciones son válidas
numOrString = "Soy un string"; // Estas tres opciones son válidas
numOrString = 1; // Estas tres opciones son válidas

// Para comprobar el tipo de una variable usamor typeof.

// console.log(typeof bmw); //object

// EJERCICIOS

// Objetos
type NiceCar = {
  carroceria: string;
  modelo: string;
  antibalas: boolean;
  pasajeros: number;
  disparar?: () => void;
};
let batimovil: NiceCar = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros: 4,
};

let bumblebee: NiceCar = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros: 4,
  disparar() {
    // El metodo disparar es opcional
    console.log("Disparando");
  },
};

// Villanos debe de ser un arreglo de objetos personalizados
type Bad = {
  nombre: string;
  edad: number | undefined;
  mutante: boolean;
};
let villanos: Bad[] = [
  {
    nombre: "Lex Luthor",
    edad: 54,
    mutante: false,
  },
  {
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true,
  },
  {
    nombre: "James Logan",
    edad: undefined,
    mutante: true,
  },
];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type Hero = {
  poder: string;
  estatura: number;
};
type Villain = {
  lider: boolean;
  miembros: string[];
};
let charles: Hero = {
  poder: "psiquico",
  estatura: 1.78,
};

let apocalipsis: Villain = {
  lider: true,
  miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: Hero | Villain;

mystique = charles;
mystique = apocalipsis;
