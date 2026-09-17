/* 
Assuntos desta seção:

- getters
- setters
- static

*/

export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  /*
Por convenção, ao utilizar get e set, usa-se underline no atributo do construtor, isso porque o getter e o setter funcionam como atributo da classe gerando conflito se deixar o mesmo nome.
*/
  // Getter: acessado como propriedade (pessoa1.cpf)
  get cpf(): string {
    return this._cpf.replace(/\D/g, "");
  }

  // Setter: executa validação antes de alterar (pessoa1.cpf = 'novo')
  set cpf(novoCpf: string) {
    if (!novoCpf.trim()) {
      throw new Error("O cpf não pode ser vazio");
    }
    this._cpf = novoCpf;
  }
}

const pessoa1 = new Pessoa("Gustavo", "Savi", 38, "000.000.000-00");
pessoa1.cpf = "111.111.111.11";
console.log(pessoa1.cpf);

// O Método / Atributo `static`
