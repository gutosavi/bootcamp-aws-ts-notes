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
  const nomeEventoLimpo = evento.tipo.trim().toLowerCase();

  switch (nomeEventoLimpo) {
    case "inscricao":
      return "Inscrição realizada na prova X para o ciclista Y.";
    case "pagamento":
      return "Pagamento de R$ X confirmado para ciclista Y.";
    case "cancelamento":
      return "Inscrição cancelada. Motivo X.";
    default:
      return "[ERRO] - Não foi possível processar.";
  }
};

const evento: EventoAcao = {
  tipo: "PAGAMENTO",
  idCiclista: 2,
  valor: 200,
};
console.log(processarEvento(evento));

// Agregação em Sistema de Notificação (Composisão)

interface CanalNotificação {
  enviar(mensagem: string): boolean;
}

export class NotificacaoEmail implements CanalNotificação {
  enviar(mensagem: string): boolean {
    if (!mensagem.trim()) {
      console.log("O campo mensagem não pode estar vazio.");
      return false;
    }

    console.log("Enviando e-mail: ...");
    return true;
  }
}

export class NotificacaoSMS implements CanalNotificação {
  enviar(mensagem: string): boolean {
    if (!mensagem.trim()) {
      console.log("O campo mensagem não pode estar vazio.");
      return false;
    }

    console.log("Enviando SMS: ...");
    return true;
  }
}

type TipoNotificacao = "EMAIL" | "SMS" | "AMBOS";

export class GerenciadorNotificacao {
  constructor(
    public notificacaoEmail = new NotificacaoEmail(),
    public notificacaoSMS = new NotificacaoSMS(),
  ) {}

  notificar(mensagem: string, tipo: TipoNotificacao) {
    switch (tipo) {
      case "EMAIL":
        return this.notificacaoEmail.enviar(mensagem);
      case "SMS":
        return this.notificacaoSMS.enviar(mensagem);
      case "AMBOS":
        return (
          this.notificacaoEmail.enviar(mensagem),
          this.notificacaoSMS.enviar(mensagem)
        );
      default:
        return "Não foi possível fazer a operação.";
    }
  }
}

const notificacao = new GerenciadorNotificacao();
console.log(notificacao.notificar("Hello World", "AMBOS"));
