// Formatação e Limpeza de dados (validação básica)

const formatarUsuario = (
  nome: string,
  email: string,
): { nome: string; email: string } => {
  const nomeSemEspacos = nome.trim();
  const nomeFormatado =
    nomeSemEspacos.charAt(0).toUpperCase() +
    nomeSemEspacos.slice(1).toLowerCase();
  const emailFormatado = email.toLowerCase();

  if (!emailFormatado.includes("@")) {
    throw new Error("E-mail inválido");
  }

  return {
    nome: nomeFormatado,
    email: emailFormatado,
  };
};
console.log(formatarUsuario("GUSTAVO", "gustAVO@mail.com"));
console.clear();

// Filtro e Mapeamento de Produtos

type Produto = {
  id: number;
  nome: string;
  preco: number;
  emEstoque: boolean;
};

const produtos: Produto[] = [
  { id: 1, nome: "Teclado Mecânico", preco: 250, emEstoque: true },
  { id: 2, nome: "Mouse Gamer", preco: 120, emEstoque: false },
  { id: 3, nome: "Monitor 24", preco: 900, emEstoque: true },
  { id: 4, nome: "Headset", preco: 180, emEstoque: true },
];

const produtosComDesconto = (produtos: Produto[]): {} => {
  return produtos
    .filter((produto) => produto.emEstoque === true)
    .map((produto) => {
      const nome = produto.nome;
      const preco = produto.preco;

      return {
        nome,
        precoComDesconto: preco * 0.9,
      };
    });
};
console.log(produtosComDesconto(produtos));
console.clear();

// Agrupamento com Map

type Transacao = {
  id: string;
  categoria: "Alimentação" | "Transporte" | "Lazer";
  valor: number;
};

const transacoes: Transacao[] = [
  { id: "t1", categoria: "Alimentação", valor: 50 },
  { id: "t2", categoria: "Transporte", valor: 20 },
  { id: "t3", categoria: "Alimentação", valor: 30 },
  { id: "t4", categoria: "Lazer", valor: 100 },
];

const calcularTotalPorCategoria = (
  transacoes: Transacao[],
): Map<string, number> => {
  return transacoes.reduce((acc, item) => {
    const categoria = item.categoria;
    const totalAtual = acc.get(categoria) ?? 0;

    acc.set(categoria, totalAtual + item.valor);

    return acc;
  }, new Map<string, number>());
};
console.log(calcularTotalPorCategoria(transacoes));

// Histórico com limite de tamanho

class HistoricoBusca {
  #busca: string[] = [];
  #maxSize: number;

  constructor(maxSize = 3) {
    this.#maxSize = maxSize;
  }

  get isEmpty() {
    return this.#busca.length === 0;
  }

  enqueue(element: string): void {
    if (!element.trim()) {
      throw new Error("O elemento não pode ser vazio.");
    }

    this.#busca.push(element);
  }

  dequeue(): string {
    if (this.isEmpty) throw new Error("A fila está vazia.");

    return this.#busca.shift()!;
  }

  adicionarBusca(termo: string): void {
    if (this.#busca.length === this.#maxSize) {
      this.dequeue();
    }

    this.enqueue(termo);
  }

  obterHistorico(): string[] {
    if (this.isEmpty) {
      throw new Error("O histórico de busca está vazio");
    }

    return [...this.#busca];
  }

  clear(): void {
    if (this.isEmpty) {
      throw new Error("O histórico já está vazio");
    }

    this.#busca = [];
  }
}

const historico = new HistoricoBusca();

historico.adicionarBusca("google.com");
historico.adicionarBusca("github.com");
historico.adicionarBusca("stackoverflow.com");
console.log(historico.obterHistorico());
historico.adicionarBusca("udemy.com");
console.log(historico.obterHistorico());
