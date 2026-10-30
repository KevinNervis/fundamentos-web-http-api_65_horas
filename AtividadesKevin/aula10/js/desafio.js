let pontuacao = 0

function acertar() {
    const pontos = document.getElementById("pontos")
    const mensagem = document.getElementById("mensagem");

    pontuacao += 10;
    pontos.textContent = pontuacao;

    if (pontuacao >= 30) {
        mensagem.textContent = "Parabéns! Meta alcançada!"
    } else {
        mensagem.textContent = "Continue tentando!"
    }
}

function perdeu() {
    const pontos = document.getElementById("pontos")
    const mensagem = document.getElementById("mensagem");

    pontuacao -= 5;

    if (pontuacao < 0) {
        pontuacao = 0;
    }

    pontos.textContent = pontuacao;

    if (pontuacao >= 30) {
        mensagem.textContent = "Parabéns! Meta alcançada!";
    } else {
        mensagem.textContent = "Continue tentando!";
    }
}
function reiniciar() {
    pontuacao = 0;
    
    const pontos = document.getElementById("pontos");
    const mensagem = document.getElementById("mensagem");
    pontos.textContent = "0";
    mensagem.textContent = "";
}