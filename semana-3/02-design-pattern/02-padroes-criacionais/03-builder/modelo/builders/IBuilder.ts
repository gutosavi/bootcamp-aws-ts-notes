import type Engine from "../components/Engine.js";
import type Transmission from "../components/Transmission.js";
import type VehicleType from "../components/VehicleType.js";
import type Wheel from "../components/Wheel.js";
import type Vehicle from "../products/Vehicle.js";

export default interface IBuilder {
  reset(): void;
  getVehicle(): Vehicle;
  addWheel(wheel: Wheel): void;
  setVehicleType(value: VehicleType): void;
  setSeats(seats: number): void;
  setEngine(engine: Engine): void;
  setTransmission(transmission: Transmission): void;
}
