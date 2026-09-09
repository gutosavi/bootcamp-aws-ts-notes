/* Exercícios propostos pelo professor durante as aulas */

type Alunos = {
  nome: string;
  notas: number[];
};

const aluno: Alunos = {
  nome: "Gustavo",
  notas: [7, 6, 8, 7],
};

const mediaAluno = (aluno: Alunos) => {
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
// console.log(mediaAluno(aluno));

const alunos: Alunos[] = [
  { nome: "Gustavo", notas: [7, 6, 8, 7] },
  { nome: "Pedro", notas: [7, 7, 8, 8] },
];

const mediaAlunos2 = (listaAlunos: Alunos[]) => {
  return listaAlunos.forEach((aluno) => {
    const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
    const media = soma / aluno.notas.length;

    console.log(
      `A soma das notas do ${aluno.nome} foi ${soma} e a média é ${media}.`,
    );
  });
};
// mediaAlunos2(alunos);

// média usando for...of
const mediaAlunos3 = (listaAlunos: Alunos[]) => {
  for (const aluno of listaAlunos) {
    let soma = 0;
    console.log(aluno);

    for (const i of aluno.notas) {
      soma += i;
    }

    const media = soma / aluno.notas.length;

    console.log(
      `A nota soma das notas de ${aluno.nome} é ${soma} e a média é ${media}`,
    );
  }
};
mediaAlunos3(alunos);
