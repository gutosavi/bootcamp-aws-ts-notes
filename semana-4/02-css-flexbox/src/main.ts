import { InscricaoAtleta } from "./entities/inscricao.js";
import { ProcessarPagamento } from "./services/processar-pagamento.js";
import { NotificacaoEmailService } from "./services/servico-notificao.js";
import { CategoriaAtleta } from "./types/categoria-types.js";

const notificacaoEmail = new NotificacaoEmailService();
const processarPagamento = new ProcessarPagamento();

const enviar = document.getElementById("enviar") as HTMLButtonElement;
const inputNome = document.getElementById("nome") as HTMLInputElement;
const inputCategoria = document.getElementById("categoria") as HTMLInputElement;

function realizaInscricao(nome: string, categoriaSelecionada: CategoriaAtleta) {
  return new InscricaoAtleta(
    "1",
    nome,
    categoriaSelecionada,
    notificacaoEmail,
    processarPagamento,
  );
}

function enviarInscricao() {
  const categoria = inputCategoria.value as CategoriaAtleta;
  const nome = inputNome.value;

  if (!nome || !categoria) throw new Error("Os campos devem ser preenchidos.");

  try {
    const atleta = realizaInscricao(nome, categoria);

    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Status atual: ${atleta.status}`);
    console.log(`Valor a pagar antes de processar: ${atleta.total}`);
    atleta.checkout({ metodo: "PIX", chave: "gustavo@mail.com" });
    console.log(`Valor a pagar: ${atleta.total}`);
    console.log(`Status atualizado: ${atleta.status}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`ERRO: ${error.message}`);
    }
  }
}

enviar.addEventListener("click", enviarInscricao);
