/*
Exercícios práticos de revisão — Dia 1 - Semana 2
 
Conteúdos praticados:
 - Estrutura de dados
 - Histórico de navegação

 */

class NavigationHistory {
  #stackPrev: string[];
  #stackNext: string[];
  #currentPage: string;

  constructor(currentData: string) {
    this.#stackPrev = [];
    this.#stackNext = [];
    this.#currentPage = currentData;
  }

  get currentPage(): string {
    return this.#currentPage;
  }

  get isPrevEmpty(): boolean {
    return this.#stackPrev.length === 0;
  }

  get isNextEmpty(): boolean {
    return this.#stackNext.length === 0;
  }

  navTo(newUrl: string): void {
    if (!newUrl.trim()) throw new Error("O elemento não pode ser vazio");

    this.#stackPrev.push(this.#currentPage); // adiciona a página antiga para ao pilha de Voltar
    this.#currentPage = newUrl; // adiciona a nova url no data atual
    this.#stackNext = []; // limpa a pilha de Avançar, pois um novo fluxo foi iniciado
  }

  prev(): void {
    if (this.isPrevEmpty) throw new Error("Não há páginas para voltar.");

    this.#stackNext.push(this.#currentPage); // adiciona a página atual na stack Avançar
    this.#currentPage = this.#stackPrev.pop()!; // desempilha o topo da pilha Voltar e define como novo data atual
  }

  next(): void {
    if (this.isNextEmpty) throw new Error("Não há páginas para avançar.");

    this.#stackPrev.push(this.#currentPage); // a página atual é empilhada na pilha de Voltar
    this.#currentPage = this.#stackNext.pop()!; // a pagina atual recebe o elemento do topo da pilha de avançar
  }
}

const novaNavegacao = new NavigationHistory("home.com");
console.log("Página iniciada:", novaNavegacao.currentPage);
novaNavegacao.navTo("github.com");
novaNavegacao.navTo("notion.so");
console.log("Status:", novaNavegacao.currentPage);
novaNavegacao.prev();
console.log(novaNavegacao.currentPage);
novaNavegacao.prev();
console.log(novaNavegacao.currentPage);
novaNavegacao.next();
console.log(novaNavegacao.currentPage);
novaNavegacao.navTo("stackoverflow.com");
console.log(novaNavegacao.isNextEmpty);
