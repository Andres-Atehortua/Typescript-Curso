// Los gets y los sets son una forma de accesar y modificar la información de una clase de forma controlada

class Avenger {
  private _nombre: string;
  constructor(nombre?: string) {
    this._nombre = nombre || "";
  }

  public get nombre(): string {
    console.log("Entro en get nombre");
    return this._nombre ? this._nombre : "No hay nombre";
  }

  public set nombre(nombre: string) {
    console.log("Se llamó el set");

    this._nombre = nombre;
  }
}

let ciclope = new Avenger("carlitos");

console.log(ciclope.nombre);

ciclope.nombre = "Ciclopeeee";
console.log(ciclope.nombre);
