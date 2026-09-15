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

  insertAt(position: number, value: T): void {
    if (position >= 0 && position <= this.#size) {
      if (position === 0) {
        this.insertFirst(value);
        return;
      }

      if (position === this.#size) {
        this.insertLast(value);
        return;
      }
    }

    const newNode = new Node(value);
    let current = this.#head;
    let prev: Node<T> | null = null;

    for (let i = 0; i < position; i++) {
      prev = current;
      current = current?.next ?? null;
    }

    if (!current || !prev) {
      throw new Error("Não foi possível inserir na posição informada.");
    }

    newNode.next = current;
    prev.next = newNode;
    this.#size++;
  }

  pop(): T {
    if (this.isEmpty || !this.#head) {
      throw new Error("A lista está vazia.");
    }

    if (this.#size === 1) {
      const removedValue = this.#head.value;
      this.#head = null;
      this.#size = 0;
      return removedValue;
    }

    let current = this.#head;

    while (current.next?.next !== null) {
      current = current.next!;
    }

    const removedValue = current.next.value;

    current.next = null;
    this.#size--;

    return removedValue;
  }

  shift(): T {
    if (this.isEmpty || !this.#head) {
      throw new Error("A lista está vazia.");
    }

    if (this.#size === 1) {
      const removedValue = this.#head.value;
      this.#head = null;
      this.#size = 0;
      return removedValue;
    }

    const removedValue = this.#head.value;

    this.#head = this.#head.next;
    this.#size--;

    return removedValue;
  }

  removeAt(position: number): T {
    if (position >= 0 && position < this.#size) {
      if (position === 0) {
        const removedValue = this.shift();
        return removedValue;
      }

      if (position === this.#size) {
        const removedValue = this.pop();
        return removedValue;
      }
    }

    let current = this.#head;
    let prev: Node<T> | null = null;

    for (let i = 0; i < position; i++) {
      prev = current;
      current = current?.next ?? null;
    }

    if (!current || !prev) {
      throw new Error("Não foi possível excluir na posição informada.");
    }

    const removedValue = current.value;

    prev.next = current?.next;
    current.next = null;
    this.#size--;

    return removedValue;
  }

  indexOf(value: number): number {
    if (this.isEmpty || !this.#head) {
      throw new Error("A lista está vazia.");
    }

    let current = this.head;

    for (let i = 0; i < this.#size; i++) {
      if (current?.value === value) {
        return i;
      }
      current = current?.next ?? null;
    }

    return -1;
  }

  lastIndexOf(value: T) {
    if (this.isEmpty || !this.#head) {
      throw new Error("A lista está vazia.");
    }

    let indexOf = 0;
    let lastIndexOf = -1;
    let current: Node<T> | null = this.#head;

    while (current !== null) {
      if (current.value === value) {
        lastIndexOf = indexOf;
      }

      current = current.next;
      indexOf++;
    }

    return lastIndexOf;
  }

  toArray(): T[] {
    const result: T[] = [];
    let current = this.#head;

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }

    return result;
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

lista.insertAt(2, 25);
console.log(lista.toArray());
lista.pop();
console.log(lista.toArray());
lista.shift();
console.log(lista.toArray());
lista.removeAt(1);
console.log(lista.toArray());
console.log("Posição do nó:", lista.indexOf(40));
console.log("O último índice:", lista.lastIndexOf(40));
