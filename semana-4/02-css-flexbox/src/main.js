const enviar = document.getElementById("enviar");
const inputCategoria = document.getElementById("categoria");
function enviarInscricao() {
    console.log(inputCategoria.value);
}
enviar.addEventListener("click", enviarInscricao);
export {};
