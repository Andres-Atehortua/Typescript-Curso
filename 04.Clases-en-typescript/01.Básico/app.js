"use strict";
// Definición de una clase básica en typescript.
// En javascript no existen propiedades privadas y protegidas y por defecto son públicas. En typescript si existen.
class Avenger {
    constructor(nombre, equipo, nombreReal) {
        // Las propiedades definidas aqui son valores por defecto que se pueden sobreescribir.
        this.nombre = "Sin nombre"; // Si no se especifica siempre son públicas y puede ser accesada desde cualquier lado
        this.puedePelear = true;
        this.peleasGanadas = 0;
        (this.nombre = nombre),
            (this.equipo = equipo),
            (this.nombreReal = nombreReal);
    }
    bio() {
        let mensaje = `${this.nombre} es ${this.nombreReal} de ${this.equipo}`;
        console.log(mensaje);
    }
    cambiaEquipoPublico(nuevoEquipo) {
        return this.cambiarEquipo(nuevoEquipo);
    }
    cambiarEquipo(nuevoEquipo) {
        if (nuevoEquipo === this.equipo) {
            return false;
        }
        return true;
    }
}
let antman = new Avenger("AntMan", "Capi", "Ni idea");
antman.bio();
// antman.cambiarEquipo("Juan"); //Error porque es privada
console.log(antman.cambiaEquipoPublico("Capii"));
