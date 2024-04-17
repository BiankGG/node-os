const os = require("node:os");

function mySystemInfo() {
  const DataSystem = {
    Nombre: os.type(),
    Tipo: os.platform(),
    Version: os.version(),
    Arquitectura: os.arch(),
    Cpus: os.cpus().length,
    MemoriaTotal: os.totalmem() / 1048576 + "MB",
    MemoriaLibre: os.freemem() / 1048576 + "MB",
  };
  // console.log(DataSystem)
  const keys = Object.keys(DataSystem);

  for (i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = DataSystem[key];
    console.log(`${key} : ${value}`);
  }
}
mySystemInfo();


module.exports = mySystemInfo;
