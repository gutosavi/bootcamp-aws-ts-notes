import Transport from "./Transport.js";
import type IVehicle from "./vehicles/interfaces/IVehicle.js";
import Motorcycle from "./vehicles/Motorcycle.js";

export default class MotorcycleTransport extends Transport {
  protected createTransport(): IVehicle {
    return new Motorcycle();
  }
}
