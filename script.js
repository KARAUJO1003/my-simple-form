function atualizar() {
    let name = document.getElementById("nome").value;
    let randomNum = Math.floor(Math.random() * 5); // Gerar um número aleatório entre 0 e 4

    let messages = [
        `Olá, ${name}! Você é incrível!`,
        `Ei, ${name}! Tenha um dia maravilhoso!`,
        `Olá, ${name}! Aproveite seu momento!`,
        `Oi, ${name}! Você é demais!`,
        `Hey, ${name}! Continue brilhando!`
    ];

    let message = messages[randomNum];
    document.getElementById('display').innerHTML = message;
}