import Drone from "../aerial/Drone.js";
import type IAircraft from "../aerial/interfaces/IAircraft.js";
import type ILandVehicle from "../land/interfaces/ILandVehicle.js";
import Scooter from "../land/Scooter.js";
import type ITransportFactory from "./interfaces/ITransportFactory.js";

export default class LimeTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new Scooter();
  }
  createTransportAircraft(): IAircraft {
    return new Drone();
  }
}
