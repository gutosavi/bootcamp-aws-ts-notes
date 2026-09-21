import type IBuilder from "../builders/IBuilder.js";
import Engine from "../components/Engine.js";
import Transmission from "../components/Transmission.js";
import VehicleType from "../components/VehicleType.js";
import Wheel from "../components/Wheel.js";

export default class Director {
  constructor(private builder: IBuilder) {}

  constructSedanCar() {
    this.builder.setVehicleType(VehicleType.SEDAN);
    this.builder.setSeats(5);
    this.builder.setEngine(new Engine(1600));
    this.builder.setTransmission(Transmission.AUTOMATIC);
    this.builder.addWheel(new Wheel(15));
    this.builder.addWheel(new Wheel(15));
    this.builder.addWheel(new Wheel(15));
    this.builder.addWheel(new Wheel(15));
  }

  constructTruck() {
    this.builder.setVehicleType(VehicleType.TRUCK);
    this.builder.setSeats(3);
    this.builder.setEngine(new Engine(10000));
    this.builder.setTransmission(Transmission.MANUAL);
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
    this.builder.addWheel(new Wheel(22));
  }

  constructSportCar() {
    this.builder.setVehicleType(VehicleType.SPORTCAR);
    this.builder.setSeats(2);
    this.builder.setEngine(new Engine(2000));
    this.builder.setTransmission(Transmission.AUTOMATIC);
    this.builder.addWheel(new Wheel(18));
    this.builder.addWheel(new Wheel(18));
    this.builder.addWheel(new Wheel(18));
    this.builder.addWheel(new Wheel(18));
  }

  constructMotorcycle() {
    this.builder.setVehicleType(VehicleType.MOTO);
    this.builder.setSeats(1);
    this.builder.setEngine(new Engine(990));
    this.builder.setTransmission(Transmission.MANUAL);
    this.builder.addWheel(new Wheel(17));
    this.builder.addWheel(new Wheel(17));
  }
}
