// algorítmo para adicionar item ao início de um array

const arr = [1, 2, 3, 4, 5];

for (let i = arr.length; i >= 0; i--) {
  //@ts-ignore
  arr[i] = arr[i - 1];
} // copia o valor do índice [i - 1] para o novo índice (arr[i]) abrindo espaço empurrando todos para a direita.
arr[0] = 10;
console.log(arr);

const arr2 = [1, 2, 3, 4, 5];

// algorítimo para remover item do início

for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
  //@ts-ignore
  arr2[i] = arr2[i + 1];
  //traduzindo: arr2[i], receba o conteúdo do arr2[i + 1] / Vaga 1, receba o conteúdo da vaga 2 (1 + 1)
  console.log(arr2);
}
arr2.length = arr2.length - 1; // remove o undefined
console.log(arr2);

// Pilha (stack) - LIFO (Last In First Out) - Último a entrar, primeiro a sair

class Stack {
  #stack: string[];
  #limit: number;

  constructor(limit: number) {
    if (limit && limit <= 0 && limit > 10)
      throw new Error("O tamanho da pilha deve ser de 1 a 10.");
    this.#stack = [];
    this.#limit = limit || 10;
  }

  // Cópia rasa para não vazar a referência da memória
  get items(): string[] {
    return [...this.#stack];
  }

  get length(): number {
    return this.#stack.length;
  }

  get isEmpty(): boolean {
    return this.#stack.length === 0;
  }

  // Insere no topo
  push(element: string): void {
    if (this.length === this.#limit)
      throw new Error("A pilha atingiu seu limite.");

    this.#stack.push(element);
  }

  // Remove do topo
  pop(): string {
    if (this.isEmpty) {
      throw new Error("A pilha está vazia.");
    }

    return this.#stack.pop()!;
  }

  // Consulta o topo da pilha (último inserido)
  peek(): string {
    if (this.isEmpty) {
      throw new Error("A pilha está vazia.");
    }

    return this.#stack[this.#stack.length - 1]!;
  }

  // Esvazia a pilha completamente
  clear(): void {
    if (this.isEmpty) throw new Error("A pilha já está vazia");

    this.#stack = [];
  }
}

const pilha = new Stack(10);

pilha.push("Estudar JS");
pilha.push("Fazer Exercícios");

console.log("Topo da pilha (peek):", pilha.peek());
console.log("Item removido (pop):", pilha.pop());
console.log("Itens restantes:", pilha.items);
