let mensajes: string[] = [
  "El texto es muy corto",
  "El texto es muy largo",
  "El texto mola",
];

function obtenerError(numError: number): string {
  return mensajes[numError];
}
