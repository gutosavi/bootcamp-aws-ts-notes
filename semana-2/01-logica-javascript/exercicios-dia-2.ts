// Formatação e Limpeza de dados (validação básica)

const formatarUsuario = (
  nome: string,
  email: string,
): { nome: string; email: string } => {
  const nomeSemEspacos = nome.trim();
  const nomeFormatado =
    nomeSemEspacos.charAt(0).toUpperCase() +
    nomeSemEspacos.slice(1).toLowerCase();
  const emailFormatado = email.toLowerCase();

  if (!emailFormatado.includes("@")) {
    throw new Error("E-mail inválido");
  }

  return {
    nome: nomeFormatado,
    email: emailFormatado,
  };
};
console.log(formatarUsuario("GUSTAVO", "gustAVO@mail.com"));
