/*
Exercícios práticos extras — Dia 3
 
Conteúdos praticados:
 - estruturas complexas
 - arrays de objetos
 - matrizes
 - funções
 */

// Exercício de filtro usando duas abordagens

interface Estoque {
  nome: string;
  categoria: string;
  preco: number;
}

const estoque: Estoque[] = [
  { nome: "Calça", categoria: "Vestuário", preco: 149.0 },
  { nome: "Bermuda", categoria: "Vestuário", preco: 109.0 },
  { nome: "Perfume", categoria: "Perfumaria", preco: 249.0 },
  { nome: "Celular", categoria: "Eletrônicos", preco: 749.0 },
  { nome: "Monitor", categoria: "Eletrônicos", preco: 899.0 },
];

const filteredByCategory = (
  category: string,
  listaEstoque: Estoque[],
): Estoque[] => {
  const resultado: Estoque[] = [];

  for (const item of listaEstoque) {
    if (item.categoria === category) {
      resultado.push(item);
    }
  }

  return resultado;
};

// const filteredByCategory = estoque.filter(
//   (item) => item.categoria === "Eletrônicos",
// );

console.log(filteredByCategory("Eletrônicos", estoque));

// Soma de Matriz Simples

const matriz = [
  [10, 20],
  [30, 40],
];

const somaMatriz = (matriz: number[][]): number => {
  let soma = 0;

  for (const linha of matriz) {
    for (const numero of linha) {
      soma += numero;
    }
  }

  return soma;
};
console.log(somaMatriz(matriz));

// Mapeamento de dados encadeados

interface Users {
  nome: string;
  habilidades: string[];
}

const users: Users[] = [
  { nome: "Gustavo", habilidades: ["JavaScript", "React", "TypeScript"] },
  { nome: "Pedro", habilidades: ["JavaScript", "Angular", "Node.js"] },
  { nome: "João", habilidades: ["JavaScript", "React", "Node.js"] },
  { nome: "Maria", habilidades: ["JavaScript", "Angular", "TypeScript"] },
];

const usersByHability = users
  .filter((user) => user.habilidades.includes("TypeScript"))
  .map((user) => user.nome);
console.log(usersByHability);
