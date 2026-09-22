import type Token from "../utils/Token.js";

export default interface IMercadoPagoPagamento {
  authToken(): Token;
  enviaPagamento(): void;
  recebePagamento(): void;
}
