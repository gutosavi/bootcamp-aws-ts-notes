import Token from "../utils/Token.js";
import type IPayoneerPayment from "./IPayoneerPayment.js";

export default class Payoneer implements IPayoneerPayment {
  private token!: Token;

  authToken(): Token {
    return new Token();
  }
  sendPayment(): void {
    this.token = this.authToken();
    console.log("TOKEN:", this.token.getToken());
    console.log("Enviando pagamentos via Payoneer.");
  }
  receivePayment(): void {
    console.log("Recebendo pagamento via Payoneer.");
  }
}
