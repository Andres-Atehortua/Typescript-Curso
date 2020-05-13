"use strict";
// Los gets y los sets son una forma de accesar y modificar la información de una clase de forma controlada
var Avenger = /** @class */ (function () {
    function Avenger(nombre) {
        this._nombre = nombre || "";
    }
    Object.defineProperty(Avenger.prototype, "nombre", {
        get: function () {
            console.log("Entro en get nombre");
            return this._nombre ? this._nombre : "No hay nombre";
        },
        set: function (nombre) {
            console.log("Se llamó el set");
            this._nombre = nombre;
        },
        enumerable: true,
        configurable: true
    });
    return Avenger;
}());
var ciclope = new Avenger("carlitos");
console.log(ciclope.nombre);
ciclope.nombre = "Ciclopeeee";
console.log(ciclope.nombre);
