// Un decorador es una funcion. Se pone antes de una funcion, método o propiedad.

//El decorador de una clase recibe como parámetro su constructor

// Decorador de clase normal
function consola(constructor: Function): void {
  console.log(constructor);
}

// Decorador factory
function imprimirConsola(imprimir: boolean): Function | any {
  if (imprimir) {
    return consola;
  } else {
    return null;
  }
}

@imprimirConsola(false)
class Dam {
  constructor(public nombre: string) {}
}

// Queremos crear un metodo solo para algunos villanos, no para todos

// Decorador de clase
function planVillano(constructor: Function) {
  constructor.prototype.imprimirPlan = function () {
    console.log(`El plan de ${this.nombre} es dominar el mundo.`);
  };
}
function imprimible(constructor: Function) {
  constructor.prototype.imprimir = function () {
    console.log(this);
  };
}

// Decorador de metodo. Un decorador de metodo debe retornar una funcion
function editable(esEditable: boolean) {
  return function (
    target: any,
    nombrePropiedad: string,
    descriptor: PropertyDescriptor
  ) {
    if (!esEditable) {
      console.log("La voluntad de este loco es muy fuerte");
    }
    descriptor.writable = esEditable;
  };
}

// Decorador de propiedad

function editableProp(esEditable: boolean) {
  return function (target: any, nombrePropiedad: string): any {
    let descriptor: PropertyDescriptor = {
      writable: esEditable,
    };
    return descriptor;
  };
}

//Decoradores anidados
@imprimible
@planVillano
class Villano {
  //Decorador de propiedad
  @editableProp(true)
  public nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }

  @editable(true)
  meta(): void {
    console.log("Ser feliz dominando el mundo");
  }
}

let lex = new Villano("Lex Luthor");
// (<any>lex).imprimirPlan();

lex.meta = () => console.log("Cortar nabos rusos en la madre rusia");
lex.meta();
console.log(lex);
