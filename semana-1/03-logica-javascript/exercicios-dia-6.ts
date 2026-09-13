/*
Exercícios práticos de revisão — Dia 6
 
Conteúdos praticados:
 - Classes
 - Encapsulamento
 - Getter e Setter
 */

// Modelagem de classe (POO + regra de negócio)
interface ProdutoData {
  nome: string;
  preco: number;
  estoque: number;
}

class Produto {
  #nome: string;
  #preco: number;
  #estoque: number;

  constructor({ nome, preco, estoque }: ProdutoData) {
    this.#nome = nome;
    this.#preco = preco;
    this.#estoque = estoque;
  }

  get nome(): string {
    return this.#nome;
  }

  set nome(novoNome: string) {
    if (novoNome.length < 3)
      throw new Error("O nome deve conter ao menos 3 caracteres.");

    this.#nome = novoNome;
  }

  get preco(): number {
    return this.#preco;
  }

  get estoque(): number {
    return this.#estoque;
  }

  aplicarDesconto(porcentagem: number): void {
    if (porcentagem <= 0 || porcentagem > 20)
      throw new Error("O valor digitado deve ser entre 1 e 20");

    const valorEmDecimal = porcentagem / 100;
    this.#preco -= this.#preco * valorEmDecimal;
  }

  adicionarEstoque(quantidade: number): void {
    if (quantidade <= 0)
      throw new Error("A quantidade a ser adicionada deve ser maior que 0.");

    this.#estoque += quantidade;
  }
}

const novoProduto = new Produto({ nome: "Monitor", preco: 2000, estoque: 10 });

try {
  novoProduto.nome = "Mouse";
  console.log(novoProduto.nome);
  novoProduto.adicionarEstoque(1);
  novoProduto.aplicarDesconto(10);
  console.log(novoProduto.preco);
} catch (err) {
  if (err instanceof Error) console.error("Erro capturado:", err.message);
}
