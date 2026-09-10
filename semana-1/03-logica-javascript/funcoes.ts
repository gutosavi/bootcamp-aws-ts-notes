const areaTriangulo = (base: number, altura: number): number => {
  return (base * altura) / 2;
};
console.log(areaTriangulo(10, 10));

const areaCircunferencia = (raio: number): number => {
  const piValue = Math.PI;
  const raioAoQuadrado = raio ** 2;
  const resultado = raioAoQuadrado * piValue;

  return Number(resultado.toFixed(2));
};
console.log(areaCircunferencia(3));

const calcular = (
  n1: number,
  n2: number,
  operacao: string,
): number | string => {
  switch (operacao) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
    case "/":
      return n1 / n2;
    default:
      return "Operador não cadastrado";
  }
};
console.log(calcular(10, 10, "/"));

const ehPar = (n: number): boolean => {
  return n % 2 === 0;
};
console.log(ehPar(8));

const ehBissexto = (ano: number): boolean => {
  return ano % 4 === 0;
};
console.log(ehBissexto(2024));

const verificaAnosBissexto = (anoInicial: number) => {
  const anosBissextos: number[] = [];
  const dataAtual = new Date().getFullYear();
  let dataInicio = anoInicial;

  while (dataInicio <= dataAtual) {
    dataInicio++;

    if (
      dataInicio % 4 === 0 &&
      (dataInicio % 100 !== 0 || dataInicio % 400 === 0)
    ) {
      anosBissextos.push(dataInicio);
    }
  }
  return anosBissextos;
};

console.log(verificaAnosBissexto(1900));
