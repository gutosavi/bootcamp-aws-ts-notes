import type Engine from "../components/Engine.js";
import type Transmission from "../components/Transmission.js";
import type VehicleType from "../components/VehicleType.js";
import type Wheel from "../components/Wheel.js";
import Vehicle from "../products/Vehicle.js";
import type IBuilder from "./IBuilder.js";

export default class VehicleBuilder implements IBuilder {
  private vehicle = new Vehicle();

  reset(): void {
    this.vehicle = new Vehicle();
  }
  getVehicle(): Vehicle {
    const result: Vehicle = this.vehicle;
    this.reset();

    return result;
  }
  addWheel(wheel: Wheel): void {
    return this.vehicle.addWheel(wheel);
  }
  setVehicleType(value: VehicleType): void {
    this.vehicle.vehicleType = value;
  }
  setSeats(seats: number): void {
    this.vehicle.seat = seats;
  }
  setEngine(engine: Engine): void {
    this.vehicle.engine = engine;
  }
  setTransmission(transmission: Transmission): void {
    this.vehicle.transmission = transmission;
  }
}
