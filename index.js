const { registrar, leer } = require("./operaciones");

const info = process.argv.slice(2);
const operation = info[0];

if (operation === "registrar") {
  registrar(info.slice(1));
} else if (operation === "leer") {
  leer();
} else {
  console.log("Ingrese una operación válida, registrar o leer");
}
