export interface ServicoNotificacao {
  enviarComprovante(nomeAtleta: string, valorPago: number): void;
}

export class NotificacaoConsoleService implements ServicoNotificacao {
  enviarComprovante(nomeAtleta: string, valorPago: number): void {
    console.log(
      `Inscrição atleta: ${nomeAtleta} | Valor a pagar: ${valorPago}`,
    );
  }
}

export class NotificacaoEmailService implements ServicoNotificacao {
  enviarComprovante(nomeAtleta: string, valorPago: number): void {
    console.log(
      `Inscrição atleta: ${nomeAtleta} | Valor a pagar: ${valorPago}`,
    ); //
  }
}
