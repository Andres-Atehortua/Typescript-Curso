"use strict";
// Clase de tipo genérica
// Aqui decimos que sólo podemos asignar propiedades de tipo number o string
var Cuadrado = /** @class */ (function () {
    function Cuadrado() {
    }
    Cuadrado.prototype.area = function () {
        return +this.base * +this.altura;
    };
    return Cuadrado;
}());
// Aqui le decimos con que tipo/s de datos lo vamos a manejar
var cuadrado = new Cuadrado();
cuadrado.base = "10";
cuadrado.altura = 10;
console.log(cuadrado.area());
