import Transport from "./Transport.js";
import Bike from "./vehicles/Bike.js";
import type IVehicle from "./vehicles/interfaces/IVehicle.js";

export default class BikeTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Bike();
  }
}
