class Empresa {
  public readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const novaEmpresa = new Empresa("Udemy", "11.111.111/0001-11");
const colaborador1 = new Colaborador("Gustavo", "Savi");
const colaborador2 = new Colaborador("Maria", "Vieira");
const colaborador3 = new Colaborador("João", "Silva");

novaEmpresa.adicionaColaborador(colaborador1);
novaEmpresa.adicionaColaborador(colaborador2);
novaEmpresa.adicionaColaborador(colaborador3);

novaEmpresa.mostrarColaboradores();
