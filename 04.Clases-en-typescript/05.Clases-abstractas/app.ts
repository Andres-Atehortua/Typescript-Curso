// Cuando se declara una clase de forma abstracta, esto impide que se pueda instanciar.
// Sirve para crear modelos o moldes de clases y que puedan ser extendidas.

abstract class Mutantes {
  constructor(public nombre: string, public nombreReal: string) {}
}

class Xmen extends Mutantes {}

let wolverine = new Xmen("Wolverine", "Logan");

console.log(wolverine);
