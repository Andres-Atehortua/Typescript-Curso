// Definición de una clase básica en typescript.

// En javascript no existen propiedades privadas y protegidas y por defecto son públicas. En typescript si existen.

class Avenger {
  // Las propiedades definidas aqui son valores por defecto que se pueden sobreescribir.
  public nombre: string = "Sin nombre"; // Si no se especifica siempre son públicas y puede ser accesada desde cualquier lado
  protected equipo: string; // Sólo se puede cambiar este tipo de propiedades dentro de la clase o subclases extendidas.
  private nombreReal: string; // Sólo se puede cambiar este tipo de propiedades dentro de la clase.
  private puedePelear: boolean = true;
  private peleasGanadas: number = 0;

  constructor(nombre: string, equipo: string, nombreReal: string) {
    (this.nombre = nombre),
      (this.equipo = equipo),
      (this.nombreReal = nombreReal);
  }
  public bio(): void {
    let mensaje: string = `${this.nombre} es ${this.nombreReal} de ${this.equipo}`;
    console.log(mensaje);
  }
  public cambiaEquipoPublico(nuevoEquipo: string): boolean {
    return this.cambiarEquipo(nuevoEquipo);
  }
  private cambiarEquipo(nuevoEquipo: string): boolean {
    if (nuevoEquipo === this.equipo) {
      return false;
    }
    return true;
  }
}

let antman: Avenger = new Avenger("AntMan", "Capi", "Ni idea");
antman.bio();
// antman.cambiarEquipo("Juan"); //Error porque es privada
console.log(antman.cambiaEquipoPublico("Capii"));
