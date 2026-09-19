export interface EnviadorMensagem {
  enviar(msg: string): void;
}

export class NotificacaoEmail implements EnviadorMensagem {
  enviar(msg: string): void {
    console.log("Mensagem via E-mail:", msg);
  }
}

export class NotificacaoWhatsApp implements EnviadorMensagem {
  enviar(msg: string): void {
    console.log("Mensagem via whatsapp:", msg);
  }
}

export class GerenciadorMensagem {
  constructor(private readonly notificador: EnviadorMensagem[]) {}

  notificarAtleta(msg: string, distanciaKm: number): void {
    this.notificador.forEach((mensagem) => {
      return mensagem.enviar(`${msg} | Distância: ${distanciaKm} km`);
    });
  }
}

const meiosDeNotificacao: EnviadorMensagem[] = [
  new NotificacaoEmail(),
  new NotificacaoWhatsApp(),
];

const notificacao = new GerenciadorMensagem(meiosDeNotificacao);
notificacao.notificarAtleta("Treino de Recuperação", 50);
