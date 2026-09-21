import type IVehicle from "./interfaces/IVehicle.js";

export default class Motorcycle implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando a entrega...");
  }
  getCargo(): void {
    console.log("Pegamos a encomenda!");
  }
}
