import BikeTransport from "./transport/BikeTransport.js";
import type Transport from "./transport/Transport.js";

let transport: Transport;

transport = new BikeTransport();

transport.startTransport();
