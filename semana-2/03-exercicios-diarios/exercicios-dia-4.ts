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

//
