"use strict";
// Las propiedades o métodos estaticos se pueden llamar o invocar sin instanciar la clase
var Xmen = /** @class */ (function () {
    function Xmen() {
    }
    Xmen.crearXmen = function () {
        console.log("X Men creado con un método estático");
        return new Xmen();
    };
    Xmen.nombre = "Wolverine";
    return Xmen;
}());
// console.log(Xmen.nombre); // Esto solo se puede hacer porque la propiedad nombre es estática
var wolverine = Xmen.crearXmen();
console.log(wolverine);
