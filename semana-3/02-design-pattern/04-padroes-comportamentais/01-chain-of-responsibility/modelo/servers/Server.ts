import type Middleware from "../middlewares/Middleware.js";

export default class Server {
  private middleware: Middleware | null = null;

  setMiddeware(middleware: Middleware): void {
    this.middleware = middleware;
  }

  logIn(email: string, password: string): boolean {
    if (!this.middleware) {
      console.log("Middleware não configurado");
      return false;
    }

    if (this.middleware.check(email, password)) {
      console.log("Usuário autorizado com sucesso.");
      return true;
    }

    return false;
  }
}
