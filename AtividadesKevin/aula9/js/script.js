
// let: usado quando o valor PODE mudar depois
let temperatura = 22;
temperatura = 25; // permitido — o valor foi reatribuído

// const: usado quando o valor NÃO deve mudar depois de definido
const nomeDaCasa = "Casa Inteligente";
// nomeDaCasa = "Outro nome"; // ERRO! const não pode ser reatribuída

// Boa prática: use const por padrão, e só troque para let quando
// tiver certeza de que o valor vai precisar mudar

console.log(temperatura)
console.log(nomeDaCasa)

// Number: números, inteiros ou decimais
let idade = 25;
let preco = 19.90;

console.log("idade: " + idade)
console.log("preco: R$ " + preco)

// String: texto, entre aspas simples, duplas ou crase
let nome = "Maria";
let saudacao = `Olá, ${nome}!`; // template literal — permite interpolar variáveis com ${}

console.log( `Olá, ${nome}!`)
// Boolean: verdadeiro ou falso
let ligado = true;
let desligado = false;
console.log("ligado: " + ligado)
console.log(saudacao)

// Array: uma lista de valores
let comodos = ["sala", "cozinha", "quarto"];
console.log(comodos)

// Object: uma coleção de dados relacionados, em pares chave-valor
let casa = {
  nome: "Casa Inteligente",
  quartos: 3,
  temInternet: true
};
console.log(casa)

// ARITMÉTICOS: fazem contas
let soma = 10 + 5;        // 15
let resto = 10 % 3;       // 1 (resto da divisão — muito usado em lógica)
console.log(soma)
console.log(resto)

// DE COMPARAÇÃO: retornam true ou false
let igual = (5 === 5);     // true — === compara valor E tipo (recomendado)
let diferente = (5 !== 3); // true
let maior = (10 > 5);      // true
console.log(igual)
console.log(diferente)
console.log(maior)

// LÓGICOS: combinam condições
let temIngresso = true
let ehEstudante = true
let ehIdoso = false
let podeEntrar = (idade <= 18) && (temIngresso === true); // AND: as duas precisam ser true
let temDesconto = (ehEstudante === true) || (ehIdoso === true); // OR: basta uma ser true
let naoEstaChovendo = false
let estaChovendo = !naoEstaChovendo; // NOT: inverte o valor
console.log("pode entrar: " + podeEntrar)
console.log("tem desconto: " +temDesconto)
console.log("nao esta chovendo: " +naoEstaChovendo)

 temperatura = 28;

if (temperatura > 25) {
  console.log("Ligar o ar-condicionado");
} else if (temperatura < 18) {
  console.log("Ligar o aquecedor");
} else {
  console.log("Temperatura agradável, nada a fazer");
}
// FOR: repete um número definido de vezes — ótimo quando você sabe quantas vezes repetir
for (let i = 0; i < 5; i++) {
  console.log("Regando a planta número " + i);
}
// i = 0 (início) | i < 5 (condição de parada) | i++ (incremento a cada volta)

// WHILE: repete enquanto uma condição for verdadeira — ótimo quando não se sabe o número exato de repetições
let bateria = 100;
while (bateria > 0) {
  bateria -= 20;
  console.log("Bateria em: " + bateria + "%");
}
// Declaração de uma função — um "modo programado" reutilizável
function ligarModoCinema(nomeDoComodo) {
  console.log("Apagando luzes de: " + nomeDoComodo);
  console.log("Ligando a TV");
  console.log("Fechando as cortinas");
}

// Chamando (executando) a função, passando um parâmetro
ligarModoCinema("sala");

// Função com retorno de valor
function calcularMediaFinal(nota1, nota2) {
  const media = (nota1 + nota2) / 2;
  return media; // devolve o valor para quem chamou a função
}

const resultado = calcularMediaFinal(8, 6);
console.log(resultado); // 7

// 1. Verificar idade

idade = 18;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}


// 2. Números de 1 a 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 3. Números pares de 1 a 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// 4. Calcular média

function calcularMedia(a, b, c) {
    let media = (a + b + c) / 3;

    return media;
}


// 5. Classificar nota

function classificarNota(media) {
    if (media >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}


// Testando as funções

let media = calcularMedia(7, 8, 6);

console.log("Média:", media);
console.log(classificarNota(media));


// 6. Contagem regressiva de 10 até 0

let contador = 10;

while (contador >= 0) {
    console.log(contador);

    contador--;
}
