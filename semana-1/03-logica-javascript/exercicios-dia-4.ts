/*
Exercícios práticos de revisão — Dia 4
 
Conteúdos praticados:
 - funções
 */

// Validação de Estoque com Tratamento de Erro

interface Produto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
}

const produto: Produto = { id: 1, nome: "Monitor", preco: 1000, estoque: 5 };

const processarVenda = (produto: Produto, qtd: number): number => {
  if (qtd <= 0) throw new Error("Quantidade inválida para venda.");
  if (qtd > produto.estoque) throw new Error("Estoque insuficiente.");

  return produto.preco * qtd;
};

try {
  console.log(processarVenda(produto, 1));
} catch (err) {
  console.log(err);
}

// Relatório de Vendas

type StatusPagamento = "Aprovado" | "Pendente" | "Recusado";

interface Transacao {
  id: number;
  cliente: string;
  valor: number;
  status: StatusPagamento;
}

const transacoes: Transacao[] = [
  { id: 1, cliente: "Ana", valor: 150.0, status: "Aprovado" },
  { id: 2, cliente: "Carlos", valor: 350.0, status: "Aprovado" },
  { id: 3, cliente: "Fernanda", valor: 500.0, status: "Recusado" },
  { id: 4, cliente: "Lucas", valor: 220.0, status: "Aprovado" },
  { id: 5, cliente: "Beatriz", valor: 180.0, status: "Pendente" },
];

const obterClientesVip = (lista: Transacao[]): string[] => {
  const clientesComprasAprovadaAcima200 = lista
    .filter((item) => {
      return item.valor > 200 && item.status === "Aprovado";
    })
    .map((item) => item.cliente);

  return clientesComprasAprovadaAcima200;
};

console.log(obterClientesVip(transacoes));

// Agrupamento e Soma com Reduce

interface Jogador {
  nome: string;
  time: "Alpha" | "Beta";
  pontos: number;
}

const jogadores: Jogador[] = [
  { nome: "Marcelo", time: "Alpha", pontos: 25 },
  { nome: "Julia", time: "Beta", pontos: 40 },
  { nome: "Roberto", time: "Alpha", pontos: 30 },
  { nome: "Carla", time: "Beta", pontos: 15 },
];

const somarPontuacaoPorTime = (time: string, lista: Jogador[]) => {
  if (lista.length === 0) return 0;

  return lista.reduce((acc, jogador) => {
    if (jogador.time === time) {
      return acc + jogador.pontos;
    }
    return acc;
  }, 0);
};
console.log(somarPontuacaoPorTime("Beta", jogadores));

// Transformação de Matriz

const numeros = [
  [12, 45, 78],
  [34, 89, 23],
  [67, 11, 95],
];

const encontrarMaiorNumeroMatriz = (matriz: number[][]): number => {
  let maiorNumero = 0;

  for (const linha of matriz) {
    for (const numero of linha) {
      if (numero > maiorNumero) {
        maiorNumero = numero;
      }
    }
  }

  return maiorNumero;
};
console.log(encontrarMaiorNumeroMatriz(numeros));
