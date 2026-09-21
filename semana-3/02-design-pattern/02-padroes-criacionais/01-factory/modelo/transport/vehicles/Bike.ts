import type IVehicle from "./interfaces/IVehicle.js";

export default class Bike implements IVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando o trajeto de bike.");
  }
  getCargo(): void {
    console.log("Peguei a encomenda!");
  }
}
