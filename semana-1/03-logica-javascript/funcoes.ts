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
