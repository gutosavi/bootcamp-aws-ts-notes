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

  append(key: T, value: T, replace?: boolean): boolean {
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
        return false;
      }
      current = current.next;
    }

    const newHashNode = new HashNode(key, value);

    newHashNode.next = this.#head;
    this.#head = newHashNode;
    this.#size++;
    return true;
  }

  getByKey(key: T) {
    let current = this.#head;

    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
  }

  remove(key: T) {
    let current = this.#head;
    let prev = null;

    while (current) {
      if (current.key === key) {
        if (prev) {
          prev = current.next;
          current.next = null;
        } else {
          this.#head = current.next;
          current.next = null;
        }

        this.#size--;
        return true;
      }

      prev = current;
      current = current.next;
    }

    return false;
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

// HashTable

class HashTable {
  #size: number = 0;
  #table: Array<LinkedList<string> | undefined> = [];
  readonly max: number;

  constructor(maxSize: number) {
    this.max = maxSize;
  }

  get size(): number {
    return this.#size;
  }

  hash(key: string): number {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.max;
  }

  insert(key: string, value: string): boolean {
    const index = this.hash(key);
    let bucket = this.#table[index];

    if (!bucket) {
      bucket = new LinkedList<string>();
      this.#table[index] = bucket;
    }

    const result = bucket.append(key, value);

    if (result) {
      this.#size++;
    }

    return result;
  }

  get(key: string): string | false {
    const index = this.hash(key);
    const bucket = this.#table[index];

    if (bucket) {
      return bucket.getByKey(key) ?? false;
    }

    return false;
  }

  remove(key: string): boolean {
    const index = this.hash(key);
    const bucket = this.#table[index];

    if (bucket) {
      // já temos uma linkedlist
      const result = bucket.remove(key);

      if (result) {
        this.#size--;

        if (bucket.isEmpty) {
          this.#table[index] = undefined;
        }
      }

      return result;
    }

    return false;
  }
}

const table = new HashTable(97);
console.log(table);
console.log(table.insert("gustavo@mail.com", "Gustavo"));
console.log(table.get("gustavo@mail.com"));
console.log(table.remove("gustavo@mail.com"));
console.log(table.size);
