var Validaciones;
(function (Validaciones) {
    function validarFecha(fecha) {
        if (isNaN(fecha.valueOf())) {
            return false;
        }
        return true;
    }
    Validaciones.validarFecha = validarFecha;
})(Validaciones || (Validaciones = {}));
var Validaciones;
(function (Validaciones) {
    function validarTexto(texto) {
        if (texto.length > 3) {
            return true;
        }
        else {
            return false;
        }
    }
    Validaciones.validarTexto = validarTexto;
})(Validaciones || (Validaciones = {}));
// La idea de los namespaces y modulos es dividir en archivos los distintos tipos de código que desarrollemos.
// En una carpeta clases, en otra interfaces, en otra funciones, etc...
// Un namespace es una agrupacion de funciones y propiedades que estan de manera global
// Por defecto las funciones o propiedades que estén dentro de un namespace no pueden ser accesadas
//desde fuera de la misma. Para poder hacerlo debemos indicar con export cada propiedad o método que
//queramos que se pueda manejar desde fuera.
//MOVEMOS TODO ESTE CODIGO A OTROS ARCHIVOS. APP DEBE SER LO MÁS LIGERO POSIBLE.
// namespace Validaciones {
//   export function validarTexto(texto: string): boolean {
//     if (texto.length > 3) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   function validarFecha(fecha: Date): boolean {
//     if (isNaN(fecha.valueOf())) {
//       return false;
//     }
//     return true;
//   }
// }
// Ahora accedemos al método por notación de punto al haber exportado el método
// console.log(Validaciones.validarTexto("Pepito perez"));
// Validaciones.validarFecha(new Date()); // No se puede accesar por no haber exportado el metodo
// Ahora que hemos dividido el código en un namespace podemos usarlo desde aquí
if (Validaciones.validarTexto("Texto de validacion")) {
    console.log("El texto es válido"); // true
}
else {
    console.log("El texto no es válido");
}
