import Transport from "./Transport.js";
import Car from "./vehicles/Car.js";
import type IVehicle from "./vehicles/interfaces/IVehicle.js";

export default class CarTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Car();
  }
}
