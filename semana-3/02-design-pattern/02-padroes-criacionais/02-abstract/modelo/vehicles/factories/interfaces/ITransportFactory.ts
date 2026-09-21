import type IAircraft from "../../aerial/interfaces/IAircraft.js";
import type ILandVehicle from "../../land/interfaces/ILandVehicle.js";

export default interface ITransportFactory {
  createTransportVehicle(): ILandVehicle;
  createTransportAircraft(): IAircraft;
}
