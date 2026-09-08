const validarAcesso = (idade: number): boolean => idade >= 18;
// console.log(validarAcesso(18));

/* ---- */
const n1 = 8;
const n2 = 0;

const calculaMedia = (n1: number, n2: number): string => {
  const total = n1 + n2;
  const media = total / 2;

  if (media >= 4 && n1 > 0 && n2 > 0) {
    return "Você está aprovado.";
  } else {
    return "Você está em recuperação.";
  }
};
// console.log(calculaMedia(n1, n2));

// switch case
const checkWeekDay = (number: number): string => {
  switch (number) {
    case 0:
      return "Domingo";
    case 1:
      return "Segunda-feira";
    case 2:
      return "Terça-feira";
    case 3:
      return "Quarta-feira";
    case 4:
      return "Quinta-feira";
    case 5:
      return "Sexta-feira";
    case 6:
      return "Sábado";
    default:
      return "Digite um número de 0 a 6";
  }
};
// console.log(checkWeekDay(3));

// um ponto de atenção: o switch compara valor e tipo
const checkTypeof = (value: any) => {
  switch (typeof value) {
    case "number":
      console.log("É do tipo number");
      break;
    case "string":
      console.log("É do tipo string");
      break;
    case "boolean":
      console.log("É do tipo boolean");
      break;
    default:
      console.log("Outro tipo");
  }
};
// checkTypeof(null);

/* ---- */
const multiplicationTable = (number: number): void => {
  for (let i = 0; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
};
// multiplicationTable(10);

// você pode utilizar o loop while quando não souber quando o loop irá terminar
const rollDice = (): void => {
  let contador = 1;
  let d1 = Math.floor(Math.random() * 6 + 1);
  let d2 = Math.floor(Math.random() * 6 + 1);

  while (d1 !== d2) {
    console.log(d1, d2);
    contador++;
    d1 = Math.floor(Math.random() * 6 + 1);
    d2 = Math.floor(Math.random() * 6 + 1);
  }

  console.log(d1, d2);
  console.log(`Os dados foram jogados ${contador} vezes.`);
};
// rollDice();

/* ---- */
const isPair = (number: number): boolean => number % 2 === 0;
//console.log(isPair(3));

/* ---- */
const isPairFunction = (max: number, min: number): void => {
  let number = Math.floor(Math.random() * (max - min + 1)) + min;
  let contador = 1;

  while (number % 2 === 1) {
    console.log(`O número ${number} é impar.`);
    contador++;
    number = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  console.log(`O número ${number} é par.`);
  console.log("Quantidade de tentativas:", contador);
};
// isPairFunction(1, 20);

/* ---- */
const rollDice2 = (): void => {
  let paresEncontrados = 0;
  let totalTentativas = 0;

  while (paresEncontrados < 10) {
    let d1 = Math.floor(Math.random() * 6 + 1);
    let d2 = Math.floor(Math.random() * 6 + 1);
    let soma = d1 + d2;

    totalTentativas++;

    if (soma % 2 === 0) {
      paresEncontrados++;
      console.log(`Par número ${paresEncontrados}: ${d1} + ${d2} = ${soma}`);
    }
  }

  console.log(`Total de tentativas: ${totalTentativas}`);
};
// rollDice2();

/* ---- */
const ehMultiploDe10 = (): void => {
  for (let i = 0; i <= 100; i++) {
    if (i % 10 === 0) {
      console.log(i);

      let ramdomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

      if (ramdomNumber % 2 === 0) {
        console.log(`Parei no múltiplo ${i}`);
        break;
      }
    }
  }
};
//ehMultiploDe10();

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
