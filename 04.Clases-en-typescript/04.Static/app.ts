// Las propiedades o métodos estaticos se pueden llamar o invocar sin instanciar la clase

class Xmen {
  static nombre: string = "Wolverine";
  constructor() {}

  static crearXmen() {
    console.log("X Men creado con un método estático");
    return new Xmen();
  }
}

// console.log(Xmen.nombre); // Esto solo se puede hacer porque la propiedad nombre es estática

let wolverine = Xmen.crearXmen();
console.log(wolverine);
