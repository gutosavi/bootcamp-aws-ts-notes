type Aluno = {
  nome: string;
  notas: number[];
};

const aluno: Aluno = {
  nome: "Gustavo",
  notas: [7, 6, 8, 7],
};

const mediaAluno = (aluno: Aluno) => {
  const nome = aluno.nome;
  const notas = aluno.notas;
  let soma = 0;

  for (const nota of notas) {
    soma += nota;
  }
  // const somaNotas = notas.reduce((acc, nota) => acc + nota, 0); abordagem mais moderna

  const media = soma / notas.length;

  return {
    nome,
    media,
    resultado: media >= 7 ? "Aprovado" : "Reprovado",
  };
};

console.log(mediaAluno(aluno));
