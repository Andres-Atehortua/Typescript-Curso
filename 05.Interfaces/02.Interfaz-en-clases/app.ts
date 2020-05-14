// Para implementar una interfaz en una clase, utilizamos la palabra implements

// INTERFAZ EN CLASES
interface Xmen {
  nombre: string;
  nombreReal: string;
  regenerar(nombreReal: string): void;
}

class Mutante implements Xmen {
  nombre: string;
  nombreReal: string;
  regenerar(nombre: string) {
    console.log(`${nombre} se regeneró`);
  }
}

let wolverine = new Mutante();

// INTERFAZ EN FUNCIONES

interface DosNumeros {
  (num1: number, num2: number): number;
}

let sumar: DosNumeros = (a: number, b: number) => a + b;

let restar: DosNumeros = function (num1: number, num2: number) {
  return num1 - num2;
};

// EJERCICIOS
// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Coche {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

function conducirBatimovil(auto: Coche): void {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

let batimovil: Coche = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... run!!!");
  },
};

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Payaso {
  reir: boolean;
  comer?: boolean;
  llorar?: boolean;
}

let guason: Payaso = {
  reir: true,
  comer: true,
  llorar: false,
};

function reir(guason: Payaso): void {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
}

// Cree una interfaz para la siguiente funcion
interface Ciudad {
  (ciudadanos: string[]): number;
}

let funcion: Ciudad = function (ciudadanos: string[]): number {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
propiedades:
  - nombre
  - edad
  - sexo
  - estadoCivil
  -imprimirBio():void // console.log
*/

interface Clase {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

class Persona implements Clase {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio() {
    console.log("Hey");
  }
}
