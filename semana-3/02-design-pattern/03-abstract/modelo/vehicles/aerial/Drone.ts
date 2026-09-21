import type IAircraft from "./interfaces/IAircraft.js";

export default class Drone implements IAircraft {
  startRoute(): void {
    this.getCargo();
    this.checkWind();
    console.log("Iniciando o trajeto de drone.");
  }
  getCargo(): void {
    console.log("Pegamos a encomenda.");
  }
  checkWind(): void {
    console.log("O vento está ok.");
  }
}
