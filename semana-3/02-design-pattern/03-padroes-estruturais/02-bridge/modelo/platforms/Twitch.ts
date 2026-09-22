import type IPlatform from "./IPlatform.js";

export default class Twitch implements IPlatform {
  constructor() {
    this.configureRMTP();
    console.log("Twitch: Iniciando a transmissão.");
  }

  configureRMTP(): void {
    this.authToken();
    console.log("Twitch: Configurando o broadcasting.");
  }
  authToken(): void {
    console.log("Twitch: Autorizando a aplicação.");
  }
}
