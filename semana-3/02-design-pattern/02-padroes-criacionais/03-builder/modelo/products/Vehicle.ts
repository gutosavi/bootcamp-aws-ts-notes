import type Engine from "../components/Engine.js";
import type Transmission from "../components/Transmission.js";
import type VehicleType from "../components/VehicleType.js";
import type Wheel from "../components/Wheel.js";

export default class Vehicle {
  private _vehicleType!: VehicleType;
  private _seats: number = 0;
  private _engine!: Engine;
  private _transmission!: Transmission;
  private _wheels: Wheel[] = [];

  addWheel(wheel: Wheel) {
    this._wheels.push(wheel);
  }

  get wheels(): Wheel[] {
    return this._wheels;
  }

  get wheelsTotal(): number {
    return this._wheels.length;
  }

  get vehicleType(): VehicleType {
    return this._vehicleType;
  }

  set vehicleType(value: VehicleType) {
    this._vehicleType = value;
  }

  get seat(): number {
    return this._seats;
  }

  set seat(seat: number) {
    this._seats = seat;
  }

  get engine(): Engine {
    return this._engine;
  }

  set engine(engine: Engine) {
    this._engine = engine;
  }

  get transmission(): Transmission {
    return this._transmission;
  }

  set transmission(transmission: Transmission) {
    this._transmission = transmission;
  }
}
