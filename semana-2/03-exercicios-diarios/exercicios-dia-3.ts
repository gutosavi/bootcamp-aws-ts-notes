class HistoricoBusca {
  private readonly busca: string[] = [];
  private readonly maxSize: number;

  constructor(maxSize = 3) {
    this.maxSize = maxSize;
  }

  get size(): number {
    return this.busca.length;
  }

  adicionarBusca(termo: string): void {
    const termoLimpo = termo.trim();

    if (!termoLimpo) {
      throw new Error("O elemento não pode ser vazio.");
    }

    const indiceExistente = this.busca.indexOf(termoLimpo);
    if (indiceExistente !== -1) {
      this.busca.splice(indiceExistente, 1);
    }

    this.busca.unshift(termoLimpo);

    if (this.size > this.maxSize) {
      this.busca.pop();
    }
  }

  mostrarHistorico() {
    return [...this.busca];
  }
}

const historico = new HistoricoBusca();
console.log(historico.mostrarHistorico());

// exercício de fixação
export class Produto {
  constructor(
    private readonly _nome: string,
    private _preco: number,
  ) {
    // Garante validação mesmo na instanciação via new Produto()
    this.preco = _preco;
  }

  get nome(): string {
    return this._nome;
  }

  get precoFormatted(): string {
    return FormatadorDeValor.formatBRL(this._preco);
  }

  set preco(novoValor: number) {
    if (novoValor <= 0) {
      throw new Error("Não é permitido adicionar valor menor ou igual a zero.");
    }
    this._preco = novoValor;
  }

  static criarComDesconto(
    nome: string,
    precoBase: number,
    descontoPorcentagem: number,
  ): Produto {
    if (descontoPorcentagem < 0 || descontoPorcentagem > 20) {
      throw new Error("A porcentagem de desconto deve estar entre 0 e 20.");
    }
    const descontoEmDecimal = descontoPorcentagem / 100;
    const aplicaDesconto = precoBase - precoBase * descontoEmDecimal;

    return new Produto(nome, aplicaDesconto);
  }
}

class FormatadorDeValor {
  static formatBRL(valor: number): string {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
}

const novoProduto = new Produto("Monitor", 1200);
console.log(novoProduto.nome);
console.log((novoProduto.preco = 200));
console.log(novoProduto);
console.log(novoProduto.precoFormatted);
console.log(Produto.criarComDesconto("Mouse", 300, 10));
