"use strict";
// Cuando se declara una clase de forma abstracta, esto impide que se pueda instanciar.
// Sirve para crear modelos o moldes de clases y que puedan ser extendidas.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mutantes = /** @class */ (function () {
    function Mutantes(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    return Mutantes;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Xmen;
}(Mutantes));
var wolverine = new Xmen("Wolverine", "Logan");
console.log(wolverine);
