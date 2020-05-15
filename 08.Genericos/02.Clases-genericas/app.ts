// Clase de tipo genérica

// Aqui decimos que sólo podemos asignar propiedades de tipo number o string
class Cuadrado<T extends number | string> {
  base: T;
  altura: T;
  area(): number {
    return +this.base * +this.altura;
  }
}
// Aqui le decimos con que tipo/s de datos lo vamos a manejar
let cuadrado = new Cuadrado<number | string>();
cuadrado.base = "10";
cuadrado.altura = 10;

console.log(cuadrado.area());
