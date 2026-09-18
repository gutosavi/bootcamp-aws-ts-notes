type CategoriaAtleta = "Federado" | "Amador";
type StatusInscricao =
  | "PAGO"
  | "PENDENTE"
  | "CANCELADO"
  | "AGUARDANDO PAGAMENTO";

interface CupomPorcentagem {
  tipo: "PORCENTAGEM";
  codigo: string;
  porcentagem: number;
}

interface CupomValorFixo {
  tipo: "VALOR_FIXO";
  codigo: string;
  valor: number;
}

type CupomDesconto = CupomPorcentagem | CupomValorFixo;

export class Inscricao {
  private _status: StatusInscricao = "PENDENTE";

  constructor(
    private readonly id: string,
    private readonly nomeAtleta: string,
    private _valor: number,
    private _categoriaAtleta: CategoriaAtleta,
    private cupom?: CupomDesconto,
  ) {}

  get nome(): string {
    return this.nomeAtleta;
  }

  get valor(): number {
    return this._valor;
  }

  get status(): StatusInscricao {
    return this._status;
  }

  get categoriaAtleta(): CategoriaAtleta {
    return this._categoriaAtleta;
  }

  private calcularDescontoCategoria(categoriaAtleta: CategoriaAtleta): number {
    return categoriaAtleta === "Federado" ? this._valor * 0.15 : 0;
  }

  private calcularDescontoCupom(
    subtotal: number,
    cupom: CupomDesconto,
  ): number {
    switch (cupom.tipo) {
      case "PORCENTAGEM":
        return subtotal * (cupom.porcentagem / 100);
      case "VALOR_FIXO":
        return cupom.valor;
      default:
        const _checkExaustive: never = cupom;
        return _checkExaustive;
    }
  }

  calcularValorFinal(): number {
    if (this._status !== "PENDENTE") {
      throw new Error("O valor desta inscrição não pode mais ser alterado.");
    }

    const descontoCategoria = this.calcularDescontoCategoria(
      this._categoriaAtleta,
    );
    const subtotal = this._valor - descontoCategoria;

    const descontoCupom = this.cupom
      ? this.calcularDescontoCupom(subtotal, this.cupom)
      : 0;

    const totalAPagar = subtotal - descontoCupom;

    this._status = "AGUARDANDO PAGAMENTO";
    return Math.max(0, totalAPagar);
  }
}

const atleta = new Inscricao("01", "Gustavo", 200, "Federado", {
  tipo: "PORCENTAGEM",
  codigo: "CICLISMO10",
  porcentagem: 10,
});
console.log(`Valor Final: R$ ${atleta.calcularValorFinal()}`);
console.log(`Novo Status: ${atleta.status}`);
