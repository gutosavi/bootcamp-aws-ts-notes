import DataBase from "../servers/DataBase.js";
import Middleware from "./Middleware.js";

export default class CheckUserMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    if (email.indexOf("@") === -1) {
      console.log("E-mail inválido.");
      return false;
    }

    if (
      !DataBase.filter(
        (item) => item.email === email && item.password === password,
      ).length
    ) {
      console.log("E-mail e/ou senha inválidos.");
      return false;
    }

    return this.checkNext(email, password);
  }
}
