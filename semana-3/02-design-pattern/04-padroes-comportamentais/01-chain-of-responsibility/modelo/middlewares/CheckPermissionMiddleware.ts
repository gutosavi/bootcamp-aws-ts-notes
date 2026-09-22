import DataBase from "../servers/DataBase.js";
import PermissionType from "../servers/PermissionType.js";
import Middleware from "./Middleware.js";

export default class CheckPermissionMiddleware extends Middleware {
  public check(email: string, password: string): boolean {
    const users = DataBase.filter((item) => item.email === email);

    if (!users.length) {
      console.log("E-mail não cadastrado.");
      return false;
    }

    if (users[0]?.permission === PermissionType.ADMIN) {
      console.log("Seja bem-vindo administrador.");
      return true;
    }

    console.log("Seja bem-vindo usuário.");

    return this.checkNext(email, password);
  }
}
