const fs = require("fs");

const registrar = (info) => {
  const registroCitas = fs.readFileSync("citas.json", "utf8");
  const registroString = JSON.parse(registroCitas);

  const datos = {
    nombre: info[0],
    edad: info[1],
    tipo: info[2],
    color: info[3],
    sintomas: info[4],
  };

  if (
    (datos.nombre,
    datos.edad,
    datos.tipo,
    datos.color,
    datos.sintomas === undefined)
  ) {
    console.log("Por favor revisar información registrada");
  } else {
    fs.writeFileSync("citas.json", JSON.stringify([...registroString, datos]));
    console.log("Registro exitoso");
  }
};

const leer = () => {
  const myFile = fs.readFileSync("citas.json", "utf8");
  JSON.parse(myFile).forEach((file) => {
    console.log(file);
  });
};

module.exports = { registrar, leer };
