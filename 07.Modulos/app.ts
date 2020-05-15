// Para poder importar algo desde otro archivo. Aquí utilizamos import ... from "path"
// En los otros archivos de los cuales importamos aquí, deberemos exportar.

import { PI } from "./validaciones/numeros";

console.log(PI);

// Para poder importar y exportar modulos, necesitamos establecer un area de trabajo para correr un servidor
// Por lo que ejecutamos npm init

console.log("Hola mundo");

// PARECE QUE SYSTEMJS YA NO SOPORTA COMMONJS ASI QUE HAY QUE INVESTIGAR CÓMO EXPORTAR E IMPORTAT
// EN TYPESCRIPT
