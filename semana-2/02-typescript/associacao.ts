// Associação entre classes

export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    if (this._ferramenta === null) {
      console.log("Não tem ferramenta.");
      return null;
    }

    return this._ferramenta;
  }

  escrever(): void {
    if (this._ferramenta === null) {
      console.log("Não tem ferramenta.");
      return;
    }

    this.ferramenta?.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  abstract escrever(): void;
}

export class Caneta extends Ferramenta {
  escrever() {
    console.log(`Caneta ${this.nome} funcionando...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está funcionando...`);
  }
}

const escritor = new Escritor("Gustavo");
const caneta = new Caneta("Bic");
const maquina = new MaquinaEscrever("Olivietti");

console.log(escritor.nome);
escritor.escrever();
escritor.ferramenta = caneta;
escritor.escrever();
escritor.ferramenta = maquina;
escritor.escrever();
