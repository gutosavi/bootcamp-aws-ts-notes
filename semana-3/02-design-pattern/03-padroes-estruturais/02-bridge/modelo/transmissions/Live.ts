import type IPlatform from "../platforms/IPlatform.js";
import type ITransmission from "./ITransmission.js";

export default class Live implements ITransmission {
  constructor(private platform: IPlatform) {}

  broadcasting(): void {
    console.log("Iniciando a transmissão.");
  }
  result(): void {
    console.log("******* ON AIR *******");
  }
}
