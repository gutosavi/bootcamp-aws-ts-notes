let names = ["João", "Maria", "Gustavo", "Daniel", "Beatriz"];

const showNames = (array: string[], addName: string): void => {
  array.push(addName);

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

  console.log(`Esta lista possui ${array.length} elementos.`);
};
showNames(names, "Pedro");

/* ---- */

const diasDaSemana = [
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
  "Domingo",
];

const checkWeekDay = (array: string[]) => {
  const dayWeek = new Date().getDay() - 1;

  console.log(`Hoje é ${array[dayWeek]}.`);
};
checkWeekDay(diasDaSemana);

/* ---- */

const numeros: Array<unknown> = [
  10,
  10,
  10,
  10,
  10,
  100,
  NaN,
  true,
  "String",
  "100",
  undefined,
  false,
  null,
];

const filteredNumbers = (array: Array<unknown>) => {
  let soma = 0;

  for (let i = 0; i < array.length; i++) {
    const item = array[i];

    if (!Number.isNaN(item) && typeof item === "number") {
      soma += item;
    }
  }

  return soma;
};
console.log(filteredNumbers(numeros));

/* ---- */

type Veiculo = {
  modelo: string;
  ano: number;
  km: number;
  combustivel: "gasolina" | "alcool" | "flex";
  litrosConsumidos: number;
};

const carro: Veiculo = {
  modelo: "Uno",
  ano: 2023,
  km: 10000,
  combustivel: "gasolina",
  litrosConsumidos: 625,
};

console.log(
  `O carro ${carro.modelo} fez em média de ${(carro.km / carro.litrosConsumidos).toFixed(2)} km/l de ${carro.combustivel}.`,
);

/* ---- */

type DadosPessoa = {
  nome: string;
  sobrenome: string;
  endereco: {};
};

const pessoa = {
  nome: "João",
  sobrenome: "Fagundes",
};

const endereco = {
  rua: "Rua das Tulias",
  numero: "302",
};

const dadosCompletos: DadosPessoa = {
  ...pessoa,
  endereco: { ...endereco },
};

for (let prop in dadosCompletos) {
  // percorre as propriedades de um objeto
  console.log(dadosCompletos[prop as keyof DadosPessoa]);
}
