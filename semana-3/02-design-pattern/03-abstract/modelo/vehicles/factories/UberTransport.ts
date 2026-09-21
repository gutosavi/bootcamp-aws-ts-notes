import Airplane from "../aerial/Airplane.js";
import type IAircraft from "../aerial/interfaces/IAircraft.js";
import Car from "../land/Car.js";
import type ILandVehicle from "../land/interfaces/ILandVehicle.js";
import type ITransportFactory from "./interfaces/ITransportFactory.js";

export default class UberTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new Car();
  }
  createTransportAircraft(): IAircraft {
    return new Airplane();
  }
}
