import Token from "../utils/Token.js";
import type IPayPalPayment from "./IPayPayPayment.js";

export default class PayPal implements IPayPalPayment {
  private token!: Token;

  authToken(): Token {
    return new Token();
  }
  paypalPayment(): void {
    this.token = this.authToken();
    console.log("TOKEN:", this.token.getToken());
    console.log("Enviando pagamentos via PayPal.");
  }
  paypalReceive(): void {
    console.log("Recebendo pagamento via PayPal.");
  }
}
