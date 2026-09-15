class HashNode<T> {
  key: T;
  value: T;
  next: HashNode<T> | null = null;

  constructor(key: T, value: T) {
    this.key = key;
    this.value = value;
  }
}

class LinkedList<T> {
  #head: HashNode<T> | null = null;
  #size: number = 0;

  get head(): HashNode<T> | null {
    return this.#head;
  }

  get size(): number {
    return this.#size;
  }

  get isEmpty() {
    return this.#size === 0;
  }

  append(key: T, value: T, replace?: boolean) {
    let current = this.#head;

    while (current) {
      if (current.key === key) {
        if (replace) {
          current.value = value;
        } else {
          throw new Error(
            "A chave já existe. Mude a chave ou passse true no terceiro parâmetro para substituir o valor da chave existente",
          );
        }
        return;
      }
      current = current.next;
    }

    const newHashNode = new HashNode(key, value);

    newHashNode.next = this.#head;
    this.#head = newHashNode;
    this.#size++;
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

const lista = new LinkedList();

lista.append(1, 10);
console.log(lista.toArray());
lista.append(1, 20, true);
console.log(lista.toArray());
