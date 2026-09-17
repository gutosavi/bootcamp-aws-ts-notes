export class Saudacao {
  constructor(private nome: string) {}

  exibir(): string {
    return `Olá ${this.nome}. O import está funcionando.`;
  }
}

const saudacao = new Saudacao("Gustavo");
console.log(saudacao.exibir());
