import Client from "./vehicles/client/Client.js";
import { default as Company } from "./vehicles/consts/Company.js";
import type ITransportFactory from "./vehicles/factories/interfaces/ITransportFactory.js";
import LimeTransport from "./vehicles/factories/LimeTransport.js";
import NineNineTransport from "./vehicles/factories/NineNineTransport.js";
import UberTransport from "./vehicles/factories/UberTransport.js";

const currentCompany = Company.LIME;
let factory: ITransportFactory;

switch (currentCompany) {
  case Company.UBER:
    factory = new UberTransport();
    break;
  case Company.NINENINE:
    factory = new NineNineTransport();
    break;
  case Company.LIME:
    factory = new LimeTransport();
    break;
  default:
    throw new Error("Valor desconhecido.");
}

const client = new Client(factory);

client.startRoute();
