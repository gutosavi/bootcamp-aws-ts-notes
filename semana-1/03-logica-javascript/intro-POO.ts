// Introdução Orientada a Objetos (POO) em JavaScript
interface Prod {
  nome: string;
  estoque: number;
}

class Produto {
  nome: string;
  estoque: number;

  constructor({ nome, estoque }: Prod) {
    this.nome = nome;
    this.estoque = estoque;
  }

  comprar(qtd: number) {
    if (this.estoque < qtd) {
      console.log(`Quantidade desejada excede o disponível em estoque.`);
      return null;
    }

    this.estoque -= qtd;
    return this.estoque;
  }

  adicionar(qtd: number) {
    this.estoque += qtd;
    return this.estoque;
  }
}

const cadeira = new Produto({ nome: "Cadeira", estoque: 10 });
cadeira.adicionar(5);
cadeira.comprar(25);
console.log(cadeira);
