function darBoasVindas(){
    const paragrafo = document.getElementById("mensagem")
    paragrafo.textContent = "Seja bem-vindo à nossa escola!"
}


function comprimentarAluno(){
    const aluno = document.getElementById("nome").value.trim();
    const saudacao = document.getElementById("saudacao");

    if(aluno == "" || aluno == null){
        saudacao.textContent = "Digite seu nome para continuar."
        return
    }
    saudacao.textContent = `Olá, ${aluno}! Que bom ter você aqui.`
}

function calcularQuantidade(){
    const quantidade = Number(document.getElementById("quantidade").value.trim());
    const total = (document.getElementById("total"));

    if(quantidade == null || !Number.isInteger(quantidade) || quantidade <= 0){
        total.textContent = "Informe uma quantidade inteira maior que zero."
        return
    }
    total.textContent = `Total de Compra: R$ ${quantidade*15}.`
}

function Encerrar(){
    const status = document.getElementById("status");
    status.textContent = "Inscrições encerradas"
    status.style.color = "Red";
}
function Reabrir(){
    const status = document.getElementById("status");
    status.textContent = "Inscrições abertas"
    status.style.color = "green";
}