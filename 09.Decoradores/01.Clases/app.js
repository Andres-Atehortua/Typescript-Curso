"use strict";
// Un decorador es una funcion. Se pone antes de una funcion, método o propiedad.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//El decorador de una clase recibe como parámetro su constructor
// Decorador de clase normal
function consola(constructor) {
    console.log(constructor);
}
// Decorador factory
function imprimirConsola(imprimir) {
    if (imprimir) {
        return consola;
    }
    else {
        return null;
    }
}
var Dam = /** @class */ (function () {
    function Dam(nombre) {
        this.nombre = nombre;
    }
    Dam = __decorate([
        imprimirConsola(false)
    ], Dam);
    return Dam;
}());
// Queremos crear un metodo solo para algunos villanos, no para todos
// Decorador de clase
function planVillano(constructor) {
    constructor.prototype.imprimirPlan = function () {
        console.log("El plan de " + this.nombre + " es dominar el mundo.");
    };
}
function imprimible(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
// Decorador de metodo. Un decorador de metodo debe retornar una funcion
function editable(esEditable) {
    return function (target, nombrePropiedad, descriptor) {
        if (!esEditable) {
            console.log("La voluntad de este loco es muy fuerte");
        }
        descriptor.writable = esEditable;
    };
}
// Decorador de propiedad
function editableProp(esEditable) {
    return function (target, nombrePropiedad) {
        var descriptor = {
            writable: esEditable,
        };
        return descriptor;
    };
}
//Decoradores anidados
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano.prototype.meta = function () {
        console.log("Ser feliz dominando el mundo");
    };
    __decorate([
        editableProp(true)
    ], Villano.prototype, "nombre", void 0);
    __decorate([
        editable(true)
    ], Villano.prototype, "meta", null);
    Villano = __decorate([
        imprimible,
        planVillano
    ], Villano);
    return Villano;
}());
var lex = new Villano("Lex Luthor");
// (<any>lex).imprimirPlan();
lex.meta = function () { return console.log("Cortar nabos rusos en la madre rusia"); };
lex.meta();
console.log(lex);
