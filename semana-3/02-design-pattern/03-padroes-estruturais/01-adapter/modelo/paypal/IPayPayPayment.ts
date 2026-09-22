import type Token from "../utils/Token.js";

export default interface IPayPalPayment {
  authToken(): Token;
  paypalPayment(): void;
  paypalReceive(): void;
}
