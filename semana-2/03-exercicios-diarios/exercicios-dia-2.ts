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

export class HistoricoBusca {
  #busca: string[] = [];
  #maxSize: number;

  constructor(maxSize = 3) {
    this.#maxSize = maxSize;
  }

  get isEmpty(): boolean {
    return this.#busca.length === 0;
  }

  get size(): number {
    return this.#busca.length;
  }

  adicionarBusca(termo: string): void {
    const termoLimpo = termo.trim();

    if (!termoLimpo) {
      throw new Error("O termo de busca não pode ser vazio.");
    }

    // Evita duplicatas, movendo a busca repetida para o topo
    const indiceExistente = this.#busca.indexOf(termoLimpo);
    if (indiceExistente !== -1) {
      this.#busca.splice(indiceExistente, 1);
    }

    // Insere no início (mais recente)
    this.#busca.unshift(termoLimpo);

    // Garante o limite máximo descartando do final (mais antigo)
    if (this.#busca.length > this.#maxSize) {
      this.#busca.pop();
    }
  }

  obterHistorico(): string[] {
    return [...this.#busca];
  }

  clear(): void {
    this.#busca = [];
  }
}

const historico = new HistoricoBusca();

historico.adicionarBusca("TypeScript");
historico.adicionarBusca("Next.js");
historico.adicionarBusca("React");

console.log(historico.obterHistorico());

historico.adicionarBusca("Tailwind");
console.log(historico.obterHistorico());

// Buscador com reduce (totalizador)

type ItemCarrinho = {
  nome: string;
  preco: number;
  quantidade: number;
};

const carrinho: ItemCarrinho[] = [
  { nome: "Camiseta", preco: 50, quantidade: 2 },
  { nome: "Calça", preco: 120, quantidade: 1 },
  { nome: "Meia", preco: 15, quantidade: 3 },
];

type ItemCarrinhoTotal = ItemCarrinho & { totalAPagar: number };

const totalCarrinho = (
  carrinho: ItemCarrinho[],
): Record<string, ItemCarrinhoTotal> => {
  return carrinho.reduce<Record<string, ItemCarrinhoTotal>>((acc, item) => {
    const total = item.quantidade * item.preco;

    acc[item.nome] = {
      ...item,
      totalAPagar: total,
    };

    return acc;
  }, {});
};

console.log(totalCarrinho(carrinho));
