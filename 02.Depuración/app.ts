// Aunque exista un error de typescript, el código siempre se compila.

let hero: string = "Hulk";
let age: number = 45;
const tramp: number = 800;
let capitan = "heeeeey";

// hero = age; // Error pero se compila en app.js

// Para poder depurar código desde el archivo app.ts. En tsconfig.json activamos la opción de sourcemap.
// De esta manera en las herramientas de desarrollador del navegador, en la pestaña source, tendremos acceso
// al archivo app.ts.

// Se pueden eliminar los comentarios para que no se muestren en el archivo .js final colocando en el
// archivo tsconfig "removeComments" : true. Si no estamos utilizando el archivo tsconfig, también podemos
// hacerlo desde la terminal con el comando $ tsc app.ts --removeComments.
// Si queremos que algún comentario si se muestre podemos usar lo siguiente /*! */

// Para sólo compilar ciertos archivos y excluir otros, como node_modules, en el tsconfig usamos
// "include":["app/**/*"], "exclude": ["node_modules", "src"]. Por ejemplo

// En un proyecto grande, si quisieramos compilar todos los archivos ts en uno solo podríamos hacerlo
// desde la terminal con el siguiente comando $ tsc --outFile <nombre archivo o path> <nombre de los archivos a compilar>
// O tambien haciéndolo desde el tsconfig colocando "outFile": "path"
// Si el archivo de destino no existe, se crea.
