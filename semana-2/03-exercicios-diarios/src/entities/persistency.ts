import type { PersistencyProtocol } from "../interfaces/persistency-protocol.js";

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log("Pedido salvo com sucesso...");
  }
}
