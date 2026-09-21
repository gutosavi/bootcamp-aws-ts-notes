import type ILandVehicle from "./interfaces/ILandVehicle.js";

export default class Mortorcycle implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando a entrega.");
  }
  getCargo(): void {
    console.log("Pegamos a encomenda.");
  }
}
