import type ILandVehicle from "./interfaces/ILandVehicle.js";

export default class Car implements ILandVehicle {
  startRoute(): void {
    this.getCargo();
    console.log("Iniciando a viagem...");
  }
  getCargo(): void {
    console.log("Pegamos os passageiros. Estamos prontos!");
  }
}
