"use strict";
// Esto sirve para que solo exista una única instancia de esta clase.
var Apocalipsis = /** @class */ (function () {
    function Apocalipsis(nombre) {
        this.nombre = nombre;
    }
    Apocalipsis.llamarApocalipsis = function () {
        if (!Apocalipsis.instancia) {
            Apocalipsis.instancia = new Apocalipsis("Apocalipsis");
        }
        return Apocalipsis.instancia;
    };
    return Apocalipsis;
}());
// let apocalipsisFalso = new Apocalipsis("Apocalipsis el falso"); // No se puede llamar al constructor al ser privado
var real = Apocalipsis.llamarApocalipsis();
console.log(real);
