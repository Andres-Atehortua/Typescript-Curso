// En la consola ejecutamos el comando tsc app para compilar el codigo ts.
// Para ver permanentemente los cambios usamos el comando tsc app -w
// Para inicializar un proyecto de typescript ejecutamos el comando tsc -init
// Despues de esto podemos ejecutar el comando tsc *.ts -w para observar y compilar cambios de todos los ts

// console.log("Hola");

// Tipos de datos //
//Colocamos :boolean para saber que esa variable va a ser únicamente de tipo boleana

// Boolean

let isThor: boolean = true;
let isBatman: boolean;
let isAquaman = false; // NO RECOMENDADO

// isThor ? console.log("Estamos salvados") : console.log("No tenemos suerte");

isBatman = convertirFalso();

function convertirFalso() {
  return false;
}

// Numbers
//Colocamos :number para saber que esa variable va a ser únicamente de tipo numérica

let avengers: number = 5;
let villanos: number;
let otros: number = 2;

// if (avengers > villanos) {
//   console.log("estamos salvados");
// } else {
//   console.log("Estamos muertos");
// }

otros = 1.23;
// otros = "1221"; // Error

// Strings
// Colocamos :string para saber que esa variable va a ser únicamente de tipo cadena de texto

let batman1: string = "Batman";
let hulk: string = `Hulk`;
let wolverine: string = "Wolverine";

let concat: string = `Los superhéroes son: ${batman1}, ${hulk} y ${wolverine}`;

// Any
// Por defecto las variables son de tipo :any. Lo que significa que pueden mutar a cualquier tipo de valor.

let avenger: any = {};
let exists;
let defeats;

avenger = "Dr. Strange";
// console.log(avenger.charAt(0));

avenger = 5.25;
// console.log(avenger.toFixed(2));

avenger = true;
// console.log(avenger);

// Arrays
// Colocamos :<tipo de dato>[] para definir que una variable va a ser un array con un tipo de dato dentro

let numeros: number[] = [1, 2, 3, 4, 5, 6];
// let numeros: Array<number> = [1,2,3,4]
// arreglo.push("8") // Error

let vocales: string[] = ["a", "e", "i"];
// vocales.push(1) // Error
vocales[0].charAt(0);

// Tuples - Tipo de dato que no existe en Javascript.
// Cuando un array es finito y conocemos los tipos de datos que va a tener cada posición procedemos a usar
// los tuples.

let hero: [string, number, boolean] = ["Hulk", 2, true];
// hero.push("3"); // Se puede hacer y no genera un error LOL
// hero[0] = 2 // Error
// hero[1] = "Iron Man"; // Error

// Enum - Tipo de dato de enumeraciones.

// Por defecto el valor de la primera propiedad, en este caso min, sera de 0.
// Las siguientes propiedades obtendrán su valor al sumar en 1 el valor de la anterior propiedad.
// enum Volumen {
//   min, //0
//   medio, //1
//   max, //2
// }

// Se puede modificar el valor de cada propiedad y se mantiene la suma de +1 en una propiedad no establecida
enum Volumen {
  min = 1,
  medio, // Al no darle un valor éste sera de 2
  max = 10,
}

let audio: number = Volumen.min;
console.log(audio);

// Se puede obtener el valor inverso, es decir, colocando el número obtener el nombre de la propiedad
// Ya que este tipo de dato trabaja como un objeto con sus keys.
// Realmente esto no se usa.

let key = Volumen[10];
// console.log(key); // Retorna max

// Void - Es muy utilizado en C# y Java
// Void es lo contrario a Any. Es decir any = cualquier tipo. void = ningún tipo
// Void está orientado más a lo que es el retorno de una función.

// En javascript una funcion que no retorna nada siempre retornará undefined
// Al colocar void a la función decimos que la funcion se va a encargar de ejecutar algo sin retornar ningún valor
function callBatman(): void {
  console.log("BATMAAAAAAAAAAAAN!");
  // return 1 // Error
}

// Aún así typescript permite esta igualación. Aunque en la configuración se puede hacer que sea más estricto.
let retorno = callBatman();
// console.log(retorno); // nada

// Never
// Este tipo de dato representa un valor que nunca puede suceder
// Es decir cuando sucede un error que para por completo la aplicación.
function error(mensaje: string): never {
  throw new Error(mensaje);
}
// error("RIP"); // Detiene la aplicación

// Aserciones de tipo
// Esto sirve para trabajar el valor de una variable como si fuera de un tipo en específico para trabajar con sus métodos.

let cualquierValor: any = "Cualquier cosa";

// let lentgh: number = (<string>cualquierValor).length;

// También se puede usar el as

let largo: number = (cualquierValor as string).length;

// Null y Undefined

let nothing: undefined = undefined;
// nothing = "Hola" // Error

//EJECICIO - ASIGNAR LOS VALORES CORRESPONDIENTES

let batman: string = "Bruce";
let superman: string = "Clark";

let existe: boolean = false;

// Tuplas
let parejaHeroes: [string, string] = [batman, superman];
let villano: [string, number, boolean] = ["Lex Lutor", 5, true];

// Arreglos
let aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

//Enumeraciones
enum Fuerza {
  fuerzaAcuaman,
  fuerzaBatman,
  fuerzaFlash = 5,
  fuerzaSuperman = 100,
}
let fuerzaFlash = Fuerza.fuerzaFlash;
let fuerzaSuperman = Fuerza.fuerzaSuperman;
let fuerzaBatman = Fuerza.fuerzaBatman;
let fuerzaAcuaman = Fuerza.fuerzaAcuaman;

// Retorno de funciones
function activar_batiseñal(): string {
  return "activada";
}

function pedir_ayuda(): void {
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder: any = "100";
let largoDelPoder: number = (<string>poder).length;
// console.log(largoDelPoder);
