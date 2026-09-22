import type MercadoPago from "../mercadoPago/MercadoPago.js";
import type IPayPalPayment from "../paypal/IPayPayPayment.js";
import type Token from "../utils/Token.js";

export default class MercadoPagoAdapter implements IPayPalPayment {
  constructor(private pagamento: MercadoPago) {
    console.log("Processando pagamento via MercadoPago...");
  }

  authToken(): Token {
    return this.pagamento.authToken();
  }
  paypalPayment(): void {
    return this.pagamento.enviaPagamento();
  }
  paypalReceive(): void {
    return this.pagamento.recebePagamento();
  }
}
