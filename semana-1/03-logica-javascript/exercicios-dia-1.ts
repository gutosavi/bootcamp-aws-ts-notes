/* Exercícios práticos - Controle de decisão e Condicionais */

const classificarFaixaEtaria = (idade: number): string => {
  if (idade < 18) {
    return "Menor de Idade";
  } else if (idade < 59) {
    return "Adulto";
  } else {
    return "Idoso";
  }
};
// console.log(classificarFaixaEtaria(20));

/* ---- */

const calculadoraDesconto = (
  valorCompra: number,
  ehClienteVip: boolean,
): number => {
  if (ehClienteVip) {
    return valorCompra - valorCompra * 0.2;
  } else if (!ehClienteVip && valorCompra >= 200) {
    return valorCompra - valorCompra * 0.1;
  } else {
    return valorCompra;
  }
};
console.log(calculadoraDesconto(300, false));

const validadorDeAcesso = (
  usuarioAtivo: boolean,
  possuiPermissao: boolean,
): string => {
  if (!usuarioAtivo) return "Usuário inativo";
  if (!possuiPermissao) return "Acesso negado";

  return "Acesso Liberado";
};
console.log(validadorDeAcesso(true, false));

/* Exercícios práticos - Laços de repetição */

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} é par`);
  } else {
    console.log(`${i} é impar`);
  }
}

let somaTotal = 0;
let contador = 0;

while (contador <= 50) {
  somaTotal += contador;
  contador++;
}
console.log(somaTotal);

const tabuadaDinamica = (number: number) => {
  for (let i = 0; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
};
tabuadaDinamica(6);

/* Exercicícios práticos - Objetos básicos */

type Veiculo = {
  marca: string;
  modelo: string;
  ano: number;
  emEstoque: boolean;
};

const novoCarro: Veiculo = {
  marca: "Nivus",
  modelo: "Highline",
  ano: 2026,
  emEstoque: true,
};

type Aluno = {
  nome: string;
  nota1: number;
  nota2: number;
};

const novoAluno: Aluno = {
  nome: "Pedro",
  nota1: 8.0,
  nota2: 9.1,
};

const calculaMedia = (objeto: Aluno) => {
  const media = (objeto.nota1 + objeto.nota2) / 2;

  return {
    ...objeto,
    media,
  };
};
console.log(calculaMedia(novoAluno));

type Produtos = {
  nome: string;
  preco: number;
};

const produto: Produtos[] = [
  { nome: "Notebook", preco: 2000 },
  { nome: "Monitor", preco: 500 },
  { nome: "Teclado", preco: 300 },
  { nome: "Suporte placa de vídeo", preco: 35 },
];

const filtraProdutos = produto.filter((item) => item.preco > 50);
console.log(filtraProdutos);
