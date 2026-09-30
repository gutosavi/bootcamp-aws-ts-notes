import { InscricaoAtleta } from "./entities/inscricao.js";
import { ProcessarPagamento } from "./services/processar-pagamento.js";
import { NotificacaoEmailService } from "./services/servico-notificao.js";
import { CategoriaAtleta } from "./types/categoria-types.js";

const notificacaoEmail = new NotificacaoEmailService();
const processarPagamento = new ProcessarPagamento();

const enviar = document.getElementById("enviar") as HTMLButtonElement;
const inputNome = document.getElementById("nome") as HTMLInputElement;
const inputCategoria = document.getElementById(
  "categoria",
) as HTMLSelectElement;
const resultado = document.getElementById("resultado") as HTMLDivElement;
const erro = document.getElementById("erro") as HTMLDivElement;

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
  try {
    const categoria = inputCategoria.value as CategoriaAtleta;
    const nome = inputNome.value;

    resultado.innerHTML = "";
    erro.innerHTML = "";

    if (!nome || !categoria)
      throw new Error("Os campos devem ser preenchidos.");

    const atleta = realizaInscricao(nome, categoria);

    atleta.checkout({ metodo: "PIX", chave: "gustavo@mail.com" });

    resultado.innerHTML += `
      <p><strong>Atleta:</strong> ${atleta.nome}</p>
      <p><strong>Total:</strong> ${atleta.total}</p>
      <p><strong>Status atualizado:</strong> ${atleta.status}</p>
    `;
  } catch (error) {
    if (error instanceof Error) {
      erro.innerHTML = `Erro: ${error.message}`;
      console.error(`ERRO: ${error.message}`);
    }
  }
}

enviar.addEventListener("click", enviarInscricao);
