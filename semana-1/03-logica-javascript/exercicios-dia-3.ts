/*
Exercícios práticos extras — Dia 3
 
Conteúdos praticados:
 - estruturas complexas
 - arrays de objetos
 - matrizes
 - funções
 */

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
