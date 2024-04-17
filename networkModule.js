const os = require("node:os");

function sacarDatos() {
  const Interfaz = os.networkInterfaces();
  const KeyValue = Object.keys(Interfaz);

  for (i = 0; i < KeyValue.length; i++) {
    const interfazDatos = KeyValue[i];
    console.log(`Interfaz ${interfazDatos}:`);
    //sacar datos familia,direccion, interno.......
    const sacarInterfazDatos = Interfaz[interfazDatos][0];
    console.log(`Familia: ${sacarInterfazDatos.family}`);
    console.log(`Direccion: ${sacarInterfazDatos.address}`);
    console.log(`Interno: ${sacarInterfazDatos.internal}`);
  }
}

  sacarDatos();

module.exports = sacarDatos;
