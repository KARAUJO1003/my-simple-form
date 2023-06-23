
function pegarResposta(event) {
    event.preventDefault();
    pegar();
}

function pegar() {

    let nome = document.getElementById("nome").value
    alert("Olá " + nome);
}
