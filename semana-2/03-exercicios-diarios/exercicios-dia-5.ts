// Sistema de pagamentos e Inscrições

type StatusPedido = "PENDENTE" | "PAGO" | "CANCELADO";

interface PagamentoPix {
  metodo: "PIX";
  chave: string;
}

interface PagamentoCartao {
  metodo: "CARTAO";
  numeroCartao: string;
  parcelas: number;
}

interface PagamentoBoleto {
  metodo: "BOLETO";
  codigoBarra: string;
}

type MeioPagamento = PagamentoPix | PagamentoCartao | PagamentoBoleto;

export class Inscricao {
  constructor(
    private readonly _id: string,
    private nomeAtleta: string,
    private _valor: number,
    private _status: StatusPedido,
  ) {}

  get id(): string {
    return this._id;
  }

  get nome(): string {
    return this.nomeAtleta;
  }

  get status(): StatusPedido {
    return this._status;
  }

  get valor(): number {
    return this._valor;
  }

  confirmarPagamento(): void {
    if (this._status === "PAGO") {
      throw new Error(`A inscrição do ${this.nome} já está confirmada.`);
    }

    this._status = "PAGO";
  }

  cancelarInscricao(): void {
    if (this._status === "CANCELADO") {
      throw new Error(`A inscrição do ${this.nome} já está cancelada.`);
    }
    this._status = "CANCELADO";
  }

  processarTransacao(pagamento: MeioPagamento): string {
    switch (pagamento.metodo) {
      case "PIX":
        return `Atleta: ${this.nome} | Pix enviado usando a chave: ${pagamento.chave}`;
      case "CARTAO":
        return `Atleta: ${this.nome} | Cartão ${pagamento.numeroCartao} em ${pagamento.parcelas}x`;
      case "BOLETO":
        return `Atleta: ${this.nome} | Código de barras: ${pagamento.codigoBarra}`;
      default:
        const _checkExaustivo: never = pagamento;
        return _checkExaustivo;
    }
  }
}

interface Repositorio<T> {
  salvar(item: T): boolean;
  buscarPorId(id: string): T | undefined;
}

export class RepositorioMemoria<
  T extends { id: string },
> implements Repositorio<T> {
  private itens: Map<string, T> = new Map();

  salvar(item: T) {
    this.itens.set(item.id, item);
    return true;
  }

  buscarPorId(id: string): T | undefined {
    return this.itens.get(id);
  }
}

const novaInscricao = new Inscricao("1", "Gustavo Savi", 200, "PENDENTE");
const repInscricoes = new RepositorioMemoria<Inscricao>();

console.log(
  novaInscricao.processarTransacao({
    metodo: "CARTAO",
    numeroCartao: "**** **** **** 0000",
    parcelas: 4,
  }),
);
novaInscricao.confirmarPagamento();

repInscricoes.salvar(novaInscricao);
console.log(repInscricoes.buscarPorId("1"));
