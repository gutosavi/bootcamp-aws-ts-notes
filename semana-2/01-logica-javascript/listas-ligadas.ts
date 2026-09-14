// Lista Ligada - Linked List

class Node<T> {
  value: T;
  next: Node<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class LinkedList<T> {
  #head: Node<T> | null = null;
  #size: number = 0;

  get head(): Node<T> | null {
    return this.#head;
  }

  get size(): number {
    return this.#size;
  }

  get isEmpty() {
    return this.#size === 0;
  }

  insertFirst(value: T): void {
    const newNode = new Node(value); // cria um novo nó com o valor

    newNode.next = this.#head; // faz o 'próximo' do Nó apontar para o atual 'head'

    this.#head = newNode; // Atualiza o 'head' para ser o Nó novo

    this.#size++;
  }

  insertLast(value: T): void {
    const newNode = new Node(value);

    if (this.isEmpty) {
      this.#head = newNode;
      this.#size++;
      return;
    }

    let current = this.#head!;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;

    this.#size++;
  }
}

const lista = new LinkedList<number>();

lista.insertFirst(30); // Lista: 30 -> null
lista.insertFirst(20); // Lista: 20 -> 30 -> null
lista.insertFirst(10); // Lista: 10 -> 20 -> 30 -> null

console.log("Tamanho:", lista.size);
console.log("Primeiro valor (Head):", lista.head?.value);
console.log("Segundo valor:", lista.head?.next?.value);

lista.insertLast(40);
lista.insertLast(50);
lista.insertLast(60);
console.log("Tamanho:", lista.size);
console.log("Head:", lista.head?.value);
