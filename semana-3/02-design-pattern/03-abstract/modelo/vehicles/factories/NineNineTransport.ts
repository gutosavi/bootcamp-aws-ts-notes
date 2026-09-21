import Motorcycle from "../../../../02-factory/modelo/transport/vehicles/Motorcycle.js";
import Helicopter from "../aerial/Helicopter.js";

import type IAircraft from "../aerial/interfaces/IAircraft.js";
import type ILandVehicle from "../land/interfaces/ILandVehicle.js";
import type ITransportFactory from "./interfaces/ITransportFactory.js";

export default class NineNineTransport implements ITransportFactory {
  createTransportVehicle(): ILandVehicle {
    return new Motorcycle();
  }
  createTransportAircraft(): IAircraft {
    return new Helicopter();
  }
}
