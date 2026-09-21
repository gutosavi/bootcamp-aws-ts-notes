import type IAircraft from "./interfaces/IAircraft.js";

export default class Airplane implements IAircraft {
  startRoute(): void {
    this.checkWind();
    this.getCargo();
    console.log("Iniciando a decolagem...");
  }
  getCargo(): void {
    console.log("Pegamos os passageiros. Estamos prontos!");
  }
  checkWind(): void {
    console.log("Ventos para decolar o avião está ok.");
  }
}
