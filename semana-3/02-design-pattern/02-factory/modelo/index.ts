// import CarTransport from "./transport/CarTransport.js";
import MotorcycleTransport from "./transport/MotorcycleTransport.js";
import type Transport from "./transport/Transport.js";

let transport: Transport;

transport = new MotorcycleTransport();

transport.startTransport();
