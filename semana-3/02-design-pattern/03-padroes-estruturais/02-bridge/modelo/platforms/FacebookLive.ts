import type IPlatform from "./IPlatform.js";

export default class FacebookLive implements IPlatform {
  constructor() {
    this.configureRMTP();
    console.log("FacebookLive: Iniciando a transmissão.");
  }

  configureRMTP(): void {
    this.authToken();
    console.log("FacebookLive: Configurando o broadcasting.");
  }
  authToken(): void {
    console.log("FacebookLive: Autorizando a aplicação.");
  }
}
