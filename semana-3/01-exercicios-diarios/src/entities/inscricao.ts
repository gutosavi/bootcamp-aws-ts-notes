import type { InscricaoProtocol } from "../interfaces/inscricao-protocol.js";
import type { MeioPagamento } from "../interfaces/meios-pagamentos.js";
import type { ProcessarPagamentoProtocol } from "../services/processar-pagamento.js";
import { type ServicoNotificacao } from "../services/servico-notificao.js";
import type { CategoriaAtleta } from "../types/categoria-types.js";
import type { StatusInscricao } from "../types/inscricao-types.js";

export class InscricaoAtleta implements InscricaoProtocol {
  private valorBase: number = 100;
  private _status: StatusInscricao = "PENDENTE";
  private _total: number = this.valorBase;

  constructor(
    private readonly id: string,
    private readonly nomeAtleta: string,
    private readonly categoria: CategoriaAtleta,
    private readonly notificador: ServicoNotificacao,
    private readonly processadorPagamento: ProcessarPagamentoProtocol,
  ) {}

  get nome(): string {
    return this.nomeAtleta;
  }

  get status(): StatusInscricao {
    return this._status;
  }

  get total(): number {
    return this._total;
  }

  checkout(pagamento: MeioPagamento): number {
    if (this._status !== "PENDENTE") {
      throw new Error("Não há pendências na inscrição.");
    }

    const subtotal =
      this.categoria === "Federado" ? this.valorBase * 0.9 : this.valorBase;

    const valorFinal = this.processadorPagamento.processarPagamento(
      pagamento,
      subtotal,
    );

    this._status = "PAGO";
    this._total = valorFinal;

    this.notificador.enviarComprovante(this.nomeAtleta, valorFinal);

    return valorFinal;
  }
}
