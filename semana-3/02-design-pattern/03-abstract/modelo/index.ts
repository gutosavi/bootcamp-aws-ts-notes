import Client from "./vehicles/client/Client.js";
import { default as Company } from "./vehicles/consts/Company.js";
import type ITransportFactory from "./vehicles/factories/interfaces/ITransportFactory.js";
import NineNineTransport from "./vehicles/factories/NineNineTransport.js";
import UberTransport from "./vehicles/factories/UberTransport.js";

const currentCompany = Company.NINENINE;
let factory: ITransportFactory;

switch (currentCompany) {
  case Company.UBER:
    factory = new UberTransport();
    break;
  case Company.NINENINE:
    factory = new NineNineTransport();
    break;
  default:
    throw new Error("Valor desconhecido.");
}

const client = new Client(factory);

client.startRoute();
