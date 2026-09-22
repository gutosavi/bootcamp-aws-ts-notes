import Token from "../utils/Token.js";
import type IMercadoPagoPagamento from "./IMercadoPagoPagamento.js";

export default class MercadoPago implements IMercadoPagoPagamento {
  private token!: Token;

  authToken(): Token {
    return new Token();
  }
  enviaPagamento(): void {
    this.token = this.authToken();
    console.log("TOKEN:", this.token.getToken());
    console.log("Enviando pagamento via Mercado Pago.");
  }
  recebePagamento(): void {
    console.log("Recebendo pagamento via Mercado Pago.");
  }
}
