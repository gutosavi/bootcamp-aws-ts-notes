import type IVehicle from "./vehicles/interfaces/IVehicle.js";

export default abstract class Transport {
  startTransport(): void {
    const vehicle = this.createTransport();

    vehicle.startRoute();
  }

  protected abstract createTransport(): IVehicle;
}
