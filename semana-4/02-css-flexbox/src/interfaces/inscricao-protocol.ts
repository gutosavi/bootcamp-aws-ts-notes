import type { MeioPagamento } from "./meios-pagamentos.js";

export interface InscricaoProtocol {
  nome: string;
  status: string;
  total: number;
  checkout(pagamento: MeioPagamento): number;
}
