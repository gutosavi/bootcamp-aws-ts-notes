import { InscricaoAtleta } from "../src/entities/inscricao.js";
import { ProcessarPagamento } from "../src/services/processar-pagamento.js";
import { NotificacaoEmailService } from "../src/services/servico-notificao.js";

const servicoEmail = new NotificacaoEmailService();
const processarPagamento = new ProcessarPagamento();

const atleta = new InscricaoAtleta(
  "insc-01",
  "Gustavo Savi",
  "Federado",
  servicoEmail,
  processarPagamento,
);

console.log("Nome:", atleta.nome);
console.log("Status atual:", atleta.status);
console.log("Valor a pagar antes de processar:", atleta.total);
atleta.checkout({ metodo: "PIX", chave: "gustavo@mail.com" });
console.log("Valor a pagar:", atleta.total);
console.log("Status atualizado:", atleta.status);
