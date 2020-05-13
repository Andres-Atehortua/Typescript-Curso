// Definir propiedades en el constructor

class Avenger {
  constructor(public nombre: string, private nombreReal: string) {}
  protected getNombre(): string {
    return this.nombre;
  }
}

class Xmen extends Avenger {
  constructor(nombre: string, nombreReal: string) {
    super(nombre, nombreReal);
  }
  public getNombre(): string {
    return super.getNombre();
  }
}

let ciclope: Xmen = new Xmen("Ciclope", "Scott");

console.log(ciclope.getNombre());
