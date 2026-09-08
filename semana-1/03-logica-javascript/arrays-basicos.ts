let names = ["João", "Maria", "Gustavo", "Daniel", "Beatriz"];

const showNames = (array: string[], addName: string): void => {
  array.push(addName);

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }

  console.log(`Esta lista possui ${array.length} elementos.`);
};
showNames(names, "Pedro");

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

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  const item = numeros[i];

  if (!Number.isNaN(item) && typeof item === "number") {
    soma += item;
  }
}

console.log(soma);
