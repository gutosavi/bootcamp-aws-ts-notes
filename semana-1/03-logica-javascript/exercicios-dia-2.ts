/*
Exercícios práticos extras — Dia 2
 
Conteúdos praticados:
 - Objetos
 - Arrays de objetos
 - Acesso a propriedades
 - Estruturas aninhadas
 - for...of
 */

type Usuario = {
  nome: string;
  email: string;
  idade: number;
  endereco: {
    cidade: string;
    estado: string;
  };
};

const usuario: Usuario = {
  nome: "Gustavo",
  email: "gustavo@email.com",
  idade: 38,
  endereco: {
    cidade: "Sananduva",
    estado: "RS",
  },
};

const mostraUsuario = (usuario: Usuario) => {
  return {
    ...usuario,
    endereco: {
      ...usuario.endereco,
      estado: "SC",
    },
    ativo: true,
  };
};
console.log(mostraUsuario(usuario));

type Produtos = {
  nome: string;
  preco: number;
  estoque: number;
};

const produtos: Produtos[] = [
  {
    nome: "Notebook",
    preco: 2000,
    estoque: 10,
  },
  {
    nome: "Monitor",
    preco: 1000,
    estoque: 5,
  },
  {
    nome: "Mouse",
    preco: 200,
    estoque: 15,
  },
];

const primeiroProduto = (produtos: Produtos[]) => {
  return `O primeiro produto é: ${produtos[0]?.nome}`;
};

const mostraProdutos = (produtos: Produtos[]) => {
  // Obs: Esta função está fazendo mais coisas do que deveria. Deixei assim apenas por se tratar de exercícios para praticar
  for (const prod of produtos) {
    if (prod.nome === "Monitor") {
      prod.estoque = 8;
      break;
    }
  }

  // const produtoAlterado = produtos.map((produto) => {
  //   if (produto.nome === "Monitor") {
  //     return {
  //       ...produto,
  //       estoque: 10,
  //     };
  //   }
  //   return produto;
  // });

  produtos.push({
    nome: "Teclado",
    preco: 300,
    estoque: 7,
  });

  for (const prod of produtos) {
    console.log("Nome produto:", prod.nome);
  }

  return produtos;
};
console.log(mostraProdutos(produtos));
