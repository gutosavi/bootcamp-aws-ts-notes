const validarAcesso = (idade: number): boolean => idade >= 18;
console.log(validarAcesso(18));

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
console.log(calculaMedia(n1, n2));

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
console.log(checkWeekDay(3));

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
checkTypeof(null);

const multiplicationTable = (number: number): void => {
  for (let i = 0; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
};
multiplicationTable(10);

// você pode utilizar o loop while quando não souber quando o loop irá terminar
const rollDice = (dado1: number, dado2: number): void => {
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

rollDice(2, 5);

const isPair = (number: number): boolean => number % 2 === 0;
console.log(isPair(3));

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

isPairFunction(1, 20);
