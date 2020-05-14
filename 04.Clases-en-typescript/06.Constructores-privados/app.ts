// Esto sirve para que solo exista una única instancia de esta clase.

class Apocalipsis {
  static instancia: Apocalipsis;

  private constructor(public nombre: string) {}

  static llamarApocalipsis() {
    if (!Apocalipsis.instancia) {
      Apocalipsis.instancia = new Apocalipsis("Apocalipsis");
    }
    return Apocalipsis.instancia;
  }
}

// let apocalipsisFalso = new Apocalipsis("Apocalipsis el falso"); // No se puede llamar al constructor al ser privado
let real = Apocalipsis.llamarApocalipsis();

console.log(real);
