/* 
Assuntos abordados nesta seção:

- Herança
- Modificadores de acesso (public, private e protected)
- super
- exemplo de polimorfismo
*/

export class Pessoa {
  constructor(
    public readonly nome: string, // qualquer um lê mas será atribuído valor apenas no momento da criação (readonly)
    public readonly sobrenome: string, // qualquer um lê mas será atribuído valor apenas no momento da criação (readonly)
    private readonly idade: number, // o código de fora não sabe nem que isso existe
    protected readonly cpf: string, // visível apenas para a própria classe e as herdeiras
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string, // esta é a forma curta para declarar uma nova propriedade na classe estendida, lembrar sempre de usar o super depois
  ) {
    super(nome, sobrenome, idade, cpf);
  }
  getNomeCompleto(): string {
    // isso é um exemplo de polimorfismo
    return `Isso vem da classe Aluno: ${this.nome} ${this.sobrenome}`;
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    // isso é um exemplo de polimorfismo
    return `Isso vem da classe Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa("Gustavo", "Savi", 38, "000.000.000-00");
const aluno = new Aluno("Gustavo", "Savi", 38, "000.000.000-00", "001");
const cliente = new Cliente("Gustavo", "Savi", 38, "000.000.000-00");

console.log(pessoa.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);

//

export class Empresa {
  readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

export class Udemy extends Empresa {
  constructor() {
    super("Udemy", "00.000.000/0001-00");
  }

  popColaborador(): Colaborador | null {
    // aqui estamos usando o modificador de acesso protected da classe Pai
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

const empresa = new Udemy();
const colaborador1 = new Colaborador("Gustavo", "Savi");
const colaborador2 = new Colaborador("João", "Silva");
const colaborador3 = new Colaborador("Maria", "Rossi");

empresa.adicionarColaborador(colaborador1);
empresa.adicionarColaborador(colaborador2);
empresa.adicionarColaborador(colaborador3);

empresa.popColaborador();

empresa.mostrarColaboradores();
