import type IAircraft from "../aerial/interfaces/IAircraft.js";
import type ITransportFactory from "../factories/interfaces/ITransportFactory.js";
import type ILandVehicle from "../land/interfaces/ILandVehicle.js";

export default class Client {
  private vehicle: ILandVehicle;
  private aircraft: IAircraft;

  constructor(factory: ITransportFactory) {
    this.vehicle = factory.createTransportVehicle();
    this.aircraft = factory.createTransportAircraft();
  }

  startRoute(): void {
    this.vehicle.startRoute();
    this.aircraft.startRoute();
  }
}
