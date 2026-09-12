// Introdução Orientada a Objetos (POO) em JavaScript

// Exercício proposto pelo instrutor de criação classe Produto
interface ProdutoData {
  nome: string;
  estoque: number;
}
class Produto {
  nome: string;
  estoque: number;

  constructor({ nome, estoque }: ProdutoData) {
    this.nome = nome;
    this.estoque = estoque;
  }

  comprar(qtd: number): number {
    if (qtd > this.estoque)
      throw new Error("Quantidade desejada excede o disponível em estoque.");
    if (qtd < 0) throw new Error("Você deve adicionar uma quantidade.");

    this.#removerDoEstoque(qtd);
    return this.estoque;
  }

  adicionar(qtd: number): number {
    if (qtd < 0)
      throw new Error("Quantidade não pode ser menor ou igual a zero.");

    this.estoque += qtd;
    return this.estoque;
  }

  verificaEstoque(): string {
    return `Quantidade em estoque do produto *${this.nome}*: ${this.estoque} unidade(s).`;
  }

  #removerDoEstoque(qtd: number): void {
    // função privada - muito utilizado no JS moderno
    this.estoque -= qtd;
  }
}

const cadeira = new Produto({ nome: "Cadeira", estoque: 10 });
console.log(cadeira);

// inserido em um bloco try/catch apenas para testar
try {
  cadeira.adicionar(1);
  cadeira.comprar(8);
} catch (err) {
  if (err instanceof Error) console.log(err.message);
}

console.log(cadeira.verificaEstoque());
console.log("Situação atual:", cadeira);

// Desafio instrutor

class Aluno {
  nome: string;
  curso: string;
  notas: number[];

  constructor(nome: string, curso: string) {
    this.nome = nome;
    this.curso = curso;
    this.notas = [];
  }

  informarNotas(...notas: number[]): void {
    for (const nota of notas) {
      if (nota < 0 || nota > 10) {
        console.log(
          `Nota inválida: ${nota}. As notas devem estar entre 0 e 10.`,
        );
      }
    }

    this.notas.push(...notas);
  }

  calcularMedia() {
    if (this.notas.length === 0) return 0;

    const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
    return soma / this.notas.length;
  }

  mostrarInformacoes() {
    return `Aluno: ${this.nome} - Curso: ${this.curso} - Média final: ${this.calcularMedia()}`;
  }
}

const novoAluno = new Aluno("Gustavo", "ADS");
novoAluno.informarNotas(7, 8, 6, 7.5);
console.log(novoAluno.mostrarInformacoes());
