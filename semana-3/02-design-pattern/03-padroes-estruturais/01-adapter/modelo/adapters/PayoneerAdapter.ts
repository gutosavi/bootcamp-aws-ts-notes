import type Payoneer from "../payoneer/Payoneer.js";
import type IPayPalPayment from "../paypal/IPayPayPayment.js";
import type Token from "../utils/Token.js";

export default class PayoneerAdapter implements IPayPalPayment {
  constructor(private payoneer: Payoneer) {}

  authToken(): Token {
    return this.payoneer.authToken();
  }
  paypalPayment(): void {
    return this.payoneer.sendPayment();
  }
  paypalReceive(): void {
    return this.payoneer.receivePayment();
  }
}
