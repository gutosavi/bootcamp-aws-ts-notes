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

/* ---- */

type Produto = {
  nome: string;
  preco: number;
  estoque: number;
};

const produtos: Produto[] = [
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

const primeiroProduto = (produtos: Produto[]) => {
  return `O primeiro produto é: ${produtos[0]?.nome}`;
};

const mostraProdutos = (produtos: Produto[]) => {
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

/* ---- */

type Alunos = {
  nome: string;
  idade: number;
  curso: string;
  nota: number;
};

const alunos: Alunos[] = [
  { nome: "Gustavo", idade: 38, curso: "ADS", nota: 7 },
  { nome: "Pedro", idade: 18, curso: "Engenharia de Software", nota: 8 },
  { nome: "Angelo", idade: 38, curso: "Ciência da Computação", nota: 6 },
];

const mostraNomeAlunos = (listaAlunos: Alunos[]) => {
  for (const aluno of listaAlunos) {
    console.log(`Aluno: ${aluno.nome}`);
  }
};

const alteraNota = (listaAlunos: Alunos[]) => {
  for (const aluno of listaAlunos) {
    if (aluno.nome === "Pedro") {
      aluno.nota = 10;
      break;
    }
  }

  console.log(listaAlunos);
  return listaAlunos;
};

const estaAprovado = (listaAlunos: Alunos[]) => {
  for (const aluno of listaAlunos) {
    if (aluno.nota >= 7) {
      console.log(`Aluno ${aluno.nome}: Aprovado.`);
    } else {
      console.log(`Aluno ${aluno.nome}: Reprovado.`);
    }
  }
};

const maiorNota = (listaAlunos: Alunos[]) => {
  let maiorNota = 0;
  let alunoMaiorNota = "";

  for (const aluno of listaAlunos) {
    if (aluno.nota > maiorNota) {
      maiorNota = aluno.nota;
      alunoMaiorNota = aluno.nome;
    } // ver outras possibilidades
  }

  console.log("A maior nota é de:", alunoMaiorNota);
};
maiorNota(alunos);

/* ---- */

type Produtos = {
  nome: string;
  preco: number;
  quantidade: number;
};

type Carrinho = {
  cliente: string;
  produtos: Produtos[];
};

const pedidos: Carrinho = {
  cliente: "Robinson",
  produtos: [
    { nome: "Monitor", preco: 1200, quantidade: 1 },
    { nome: "Teclado", preco: 200, quantidade: 1 },
    { nome: "Mouse", preco: 100, quantidade: 1 },
  ],
};

const detalhesCliente = (pedidos: Carrinho) => {
  const nome = pedidos.cliente;
  console.log("Nome do cliente:", nome);
  let soma = 0;

  for (const pedido of pedidos.produtos) {
    console.log("Nome dos pedidos:", pedido.nome);
    soma += pedido.preco;

    if (pedido.nome === "Monitor") {
      pedido.quantidade = 2;
      break;
    }
  }

  console.log(`Valor total pedidos: R$ ${soma}`);
};

detalhesCliente(pedidos);
