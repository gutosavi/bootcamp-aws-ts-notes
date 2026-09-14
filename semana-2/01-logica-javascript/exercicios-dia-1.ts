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

  constructor(initialUrl: string) {
    if (!initialUrl.trim()) {
      throw new Error("A URL inicial não pode ser vazia.");
    }

    this.#stackPrev = [];
    this.#stackNext = [];
    this.#currentPage = initialUrl;
  }

  get currentPage(): string {
    return this.#currentPage;
  }

  get canGoBack(): boolean {
    return this.#stackPrev.length > 0;
  }

  get canGoForward(): boolean {
    return this.#stackNext.length > 0;
  }

  navTo(newUrl: string): void {
    if (!newUrl.trim()) throw new Error("O elemento não pode ser vazio");

    this.#stackPrev.push(this.#currentPage); // adiciona a página antiga para ao pilha de Voltar
    this.#currentPage = newUrl; // adiciona a nova url no data atual
    this.#stackNext = []; // limpa a pilha de Avançar, pois um novo fluxo foi iniciado
  }

  goBack(): string {
    if (!this.canGoBack) throw new Error("Não há páginas para voltar.");

    this.#stackNext.push(this.#currentPage); // adiciona a página atual na stack Avançar
    this.#currentPage = this.#stackPrev.pop()!; // desempilha o topo da pilha Voltar e define como novo data atual

    return this.#currentPage;
  }

  goForward(): string {
    if (!this.canGoForward) throw new Error("Não há páginas para avançar.");

    this.#stackPrev.push(this.#currentPage); // a página atual é empilhada na pilha de Voltar
    this.#currentPage = this.#stackNext.pop()!; // a pagina atual recebe o elemento do topo da pilha de avançar

    return this.#currentPage;
  }
}

const historico = new NavigationHistory("home.com");

historico.navTo("github.com");
historico.navTo("linkedin.com");

console.log("Página atual:", historico.currentPage);

historico.goBack();
console.log("Voltar:", historico.currentPage);

historico.goBack();
console.log("Voltar 2x:", historico.currentPage);

historico.goForward();
console.log("Avançar:", historico.currentPage);

historico.navTo("stackoverflow.com");
console.log("Nova navegação:", historico.currentPage);
console.log("Pode avançar:", historico.canGoForward);
