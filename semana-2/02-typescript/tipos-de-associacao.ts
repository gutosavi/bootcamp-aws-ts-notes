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
console.clear();
// Agregação entre classes

export class CarrinhoDeCompras {
  constructor(private readonly produtos: Produto[] = []) {}

  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce((acc, item) => acc + item.preco, 0);
  }
}

export class Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}
}

const produto1 = new Produto("Monitor", 2000);
const produto2 = new Produto("Processador", 3000);
const produto3 = new Produto("Placa de Vídeo", 5000);

const carrinhoDeCompras = new CarrinhoDeCompras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);
console.log(carrinhoDeCompras);
console.log(carrinhoDeCompras.valorTotal());
console.log(carrinhoDeCompras.quantidadeProdutos());
