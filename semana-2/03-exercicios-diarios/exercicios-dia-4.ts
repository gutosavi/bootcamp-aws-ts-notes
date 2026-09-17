// Modelagem de perfil

interface UsuarioBase {
  id: number | string;
  nome: string;
  email: string;
}

interface Atleta extends UsuarioBase {
  modalidade: string;
  nivel: "Amador" | "Profissional";
}

type StatusConta = "Ativo" | "Pendente" | "Inativo";

type AtletaCompleto = Atleta & { status: StatusConta };

const atleta1: AtletaCompleto = {
  id: 1,
  nome: "Gustavo",
  email: "gustavo@mail.com",
  modalidade: "Ciclismo",
  nivel: "Amador",
  status: "Ativo",
};

console.log(atleta1);

// Manipulação de Eventos com Union Types e Discriminadores

interface EventoInscricao {
  tipo: "INSCRICAO";
  idCiclista: number;
  prova: string;
}

interface EventoPagamento {
  tipo: "PAGAMENTO";
  idCiclista: number;
  valor: number;
}

interface EventoCancelamento {
  tipo: "CANCELAMENTO";
  idCiclista: number;
  motivo: string;
}

type EventoAcao = EventoInscricao | EventoPagamento | EventoCancelamento;

const processarEvento = (evento: EventoAcao): string => {
  switch (evento.tipo) {
    case "INSCRICAO":
      return `Inscrição realizada na prova ${evento.prova} para o ciclista ID ${evento.idCiclista}.`;
    case "PAGAMENTO":
      return `Pagamento de R$ ${evento.valor} confirmado para ciclista ${evento.idCiclista}.`;
    case "CANCELAMENTO":
      return `Inscrição cancelada. Motivo ${evento.motivo}.`;
    default:
      const _checkExaustivo: never = evento;
      return _checkExaustivo;
  }
};

const evento: EventoAcao = {
  tipo: "PAGAMENTO",
  idCiclista: 2,
  valor: 200,
};
console.log(processarEvento(evento));

// Agregação em Sistema de Notificação (Composisão)

interface CanalNotificacao {
  enviar(mensagem: string): boolean;
}

export class NotificacaoEmail implements CanalNotificacao {
  enviar(mensagem: string): boolean {
    if (!mensagem.trim()) {
      console.log("O campo mensagem não pode estar vazio.");
      return false;
    }
    console.log(`Enviando e-mail: ${mensagem}`);
    return true;
  }
}

export class NotificacaoSMS implements CanalNotificacao {
  enviar(mensagem: string): boolean {
    if (!mensagem.trim()) {
      console.log("O campo mensagem não pode estar vazio.");
      return false;
    }

    console.log(`Enviando SMS: ${mensagem}`);
    return true;
  }
}

type TipoNotificacao = "EMAIL" | "SMS" | "AMBOS";

export class GerenciadorNotificacao {
  constructor(
    private canalEmail: CanalNotificacao = new NotificacaoEmail(),
    private canalSMS: CanalNotificacao = new NotificacaoSMS(),
  ) {}

  notificar(mensagem: string, tipo: TipoNotificacao): boolean {
    switch (tipo) {
      case "EMAIL":
        return this.canalEmail.enviar(mensagem);
      case "SMS":
        return this.canalSMS.enviar(mensagem);
      case "AMBOS":
        const envioEmail = this.canalEmail.enviar(mensagem);
        const envioSMS = this.canalSMS.enviar(mensagem);

        return envioEmail && envioSMS;
      default:
        return false;
    }
  }
}

const notificacao = new GerenciadorNotificacao();
console.log(notificacao.notificar("Hello World", "AMBOS"));
