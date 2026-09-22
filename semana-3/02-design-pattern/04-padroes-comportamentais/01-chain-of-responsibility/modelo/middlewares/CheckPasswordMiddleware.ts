import Middleware from "./Middleware.js";

export default class CheckPasswordMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    if (password === "123456") {
      console.log("ALERTA: A sua senha é uma senha fraca.");
      return true;
    }

    return this.checkNext(email, password);
  }
}
