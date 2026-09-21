import VehicleBuilder from "./builders/VehicleBuilder.js";
import Director from "./director/Director.js";

const builder = new VehicleBuilder();
const director = new Director(builder);

director.constructSedanCar();
const sedan = builder.getVehicle();
console.log(sedan);

director.constructSportCar();
const sportCar = builder.getVehicle();
console.log(sportCar);

director.constructTruck();
const truck = builder.getVehicle();
console.log(truck);
