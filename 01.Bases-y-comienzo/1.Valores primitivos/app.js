// En la consola ejecutamos el comando tsc app para compilar el codigo ts.
// Para ver permanentemente los cambios usamos el comando tsc app -w
// Para inicializar un proyecto de typescript ejecutamos el comando tsc -init
// Despues de esto podemos ejecutar el comando tsc *.ts -w para observar y compilar cambios de todos los ts
// console.log("Hola");
// Tipos de datos //
//Colocamos :boolean para saber que esa variable va a ser únicamente de tipo boleana
// Boolean
var isThor = true;
var isBatman;
var isAquaman = false; // NO RECOMENDADO
// isThor ? console.log("Estamos salvados") : console.log("No tenemos suerte");
isBatman = convertirFalso();
function convertirFalso() {
    return false;
}
// Numbers
//Colocamos :number para saber que esa variable va a ser únicamente de tipo numérica
var avengers = 5;
var villanos;
var otros = 2;
// if (avengers > villanos) {
//   console.log("estamos salvados");
// } else {
//   console.log("Estamos muertos");
// }
otros = 1.23;
// otros = "1221"; // Error
// Strings
// Colocamos :string para saber que esa variable va a ser únicamente de tipo cadena de texto
var batman1 = "Batman";
var hulk = "Hulk";
var wolverine = "Wolverine";
var concat = "Los superh\u00E9roes son: " + batman1 + ", " + hulk + " y " + wolverine;
// Any
// Por defecto las variables son de tipo :any. Lo que significa que pueden mutar a cualquier tipo de valor.
var avenger = {};
var exists;
var defeats;
avenger = "Dr. Strange";
// console.log(avenger.charAt(0));
avenger = 5.25;
// console.log(avenger.toFixed(2));
avenger = true;
// console.log(avenger);
// Arrays
// Colocamos :<tipo de dato>[] para definir que una variable va a ser un array con un tipo de dato dentro
var numeros = [1, 2, 3, 4, 5, 6];
// let numeros: Array<number> = [1,2,3,4]
// arreglo.push("8") // Error
var vocales = ["a", "e", "i"];
// vocales.push(1) // Error
vocales[0].charAt(0);
// Tuples - Tipo de dato que no existe en Javascript.
// Cuando un array es finito y conocemos los tipos de datos que va a tener cada posición procedemos a usar
// los tuples.
var hero = ["Hulk", 2, true];
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
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 2] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
var audio = Volumen.min;
console.log(audio);
// Se puede obtener el valor inverso, es decir, colocando el número obtener el nombre de la propiedad
// Ya que este tipo de dato trabaja como un objeto con sus keys.
// Realmente esto no se usa.
var key = Volumen[10];
// console.log(key); // Retorna max
// Void - Es muy utilizado en C# y Java
// Void es lo contrario a Any. Es decir any = cualquier tipo. void = ningún tipo
// Void está orientado más a lo que es el retorno de una función.
// En javascript una funcion que no retorna nada siempre retornará undefined
// Al colocar void a la función decimos que la funcion se va a encargar de ejecutar algo sin retornar ningún valor
function callBatman() {
    console.log("BATMAAAAAAAAAAAAN!");
    // return 1 // Error
}
// Aún así typescript permite esta igualación. Aunque en la configuración se puede hacer que sea más estricto.
var retorno = callBatman();
// console.log(retorno); // nada
// Never
// Este tipo de dato representa un valor que nunca puede suceder
// Es decir cuando sucede un error que para por completo la aplicación.
function error(mensaje) {
    throw new Error(mensaje);
}
// error("RIP"); // Detiene la aplicación
// Aserciones de tipo
// Esto sirve para trabajar el valor de una variable como si fuera de un tipo en específico para trabajar con sus métodos.
var cualquierValor = "Cualquier cosa";
// let lentgh: number = (<string>cualquierValor).length;
// También se puede usar el as
var largo = cualquierValor.length;
// Null y Undefined
var nothing = undefined;
// nothing = "Hola" // Error
//EJECICIO - ASIGNAR LOS VALORES CORRESPONDIENTES
var batman = "Bruce";
var superman = "Clark";
var existe = false;
// Tuplas
var parejaHeroes = [batman, superman];
var villano = ["Lex Lutor", 5, true];
// Arreglos
var aliados = ["Mujer Maravilla", "Acuaman", "San", "Flash"];
//Enumeraciones
var Fuerza;
(function (Fuerza) {
    Fuerza[Fuerza["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    Fuerza[Fuerza["fuerzaBatman"] = 1] = "fuerzaBatman";
    Fuerza[Fuerza["fuerzaFlash"] = 5] = "fuerzaFlash";
    Fuerza[Fuerza["fuerzaSuperman"] = 100] = "fuerzaSuperman";
})(Fuerza || (Fuerza = {}));
var fuerzaFlash = Fuerza.fuerzaFlash;
var fuerzaSuperman = Fuerza.fuerzaSuperman;
var fuerzaBatman = Fuerza.fuerzaBatman;
var fuerzaAcuaman = Fuerza.fuerzaAcuaman;
// Retorno de funciones
function activar_batiseñal() {
    return "activada";
}
function pedir_ayuda() {
    console.log("Auxilio!!!");
}
// Aserciones de Tipo
var poder = "100";
var largoDelPoder = poder.length;
// console.log(largoDelPoder);
