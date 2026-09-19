import type { MessagingProtocol } from "../interfaces/messaging-protocol.js";

export class Messaging implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log(`Mensagem enviada: ${msg}`);
  }
}
