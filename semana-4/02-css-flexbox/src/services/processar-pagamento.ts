import type { MeioPagamento } from "../interfaces/meios-pagamentos.js";

export interface ProcessarPagamentoProtocol {
  processarPagamento(pagamento: MeioPagamento, valorBase: number): number;
}

export class ProcessarPagamento implements ProcessarPagamentoProtocol {
  processarPagamento(pagamento: MeioPagamento, valorBase: number): number {
    let valorFinal: number;

    switch (pagamento.metodo) {
      case "PIX":
        valorFinal = valorBase;
        break;
      case "BOLETO":
        valorFinal = valorBase + valorBase * 0.05;
        break;
      case "CARTAO":
        valorFinal = valorBase + 3.5;
        break;
      default:
        const _checkExaustive: never = pagamento;
        return _checkExaustive;
    }

    return valorFinal;
  }
}
