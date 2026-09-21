import type ILandVehicle from "./interfaces/ILandVehicle.js";

export default class Scooter implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando o trajeto de patinete.");
  }
  getCargo(): void {
    console.log("Pegamos a encomenda.");
  }
}
