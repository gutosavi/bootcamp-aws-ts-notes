interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomecompleto: () => string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto; // Usando Unions
interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {} // forma de extender com interface

export class Pessoa implements TipoPessoa2 {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomecompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const novaPessoa = new Pessoa("Gustavo", "Savi");
console.log(novaPessoa.nomecompleto());

// Na programação funcional, geralmente se vê a utilização do type, já na POO, se vê um maior uso das interfaces.
