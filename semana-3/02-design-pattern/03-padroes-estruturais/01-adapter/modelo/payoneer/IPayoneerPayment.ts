import type Token from "../utils/Token.js";

export default interface IPayoneerPayment {
  authToken(): Token;
  sendPayment(): void;
  receivePayment(): void;
}
