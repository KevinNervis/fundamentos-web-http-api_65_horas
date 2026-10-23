/*
// 🟢 Nível Fácil
function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(resultado)

    }
}
tabuada(10);


let frutas = ["Maça", "Morango", "Banana", "Uva", "Pera"]
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


let numeros = [1, 2, 3, 4];
let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

console.log(maior);




//Nivel Medio
const listanomes = ["Kevin", "Pedro", "Jefferson", "Yuri"];

function contador(lista) {
    return lista.length;
}

const total = contador(listanomes);
console.log(total);



const numero = [1, 2, 3, 4, 5, 6];
const pares = numero.filter(numeros => numeros % 2 === 0);
console.log(pares);



const notas = [10, 10, 10]

function calcularMedia(media) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]
    }
    console.log(soma / media.length);
}
calcularMedia(notas);


let aluno = { nome: "Carlos", idade: 20, notas: [7, 8, 9] }


const soma = aluno.notas.reduce((acumulador, notas) => acumulador + notas, 0)
const media = soma / aluno.notas.length;


if (media >= 7) {
    console.log(`Aprovado: ${media}`);
} else if (media >= 5) {
    console.log(`Recuperação: ${media}`);
} else {
    onsole.log(`Reprovado ${media}`);
}



function inverter(numero) {
    for (let i = numero.length - 1; i >= 0; i--) {
        console.log(numero[i]);
    }
}

const listaNumeros = [1, 2, 3, 4];
inverter(listaNumeros);
*/

function contarVogais(palavra) {
    const palavras = palavra.toLowerCase();
    const vogais = 'aeiou';
    let contador = 0;

    for (let letra of palavras) {
        if (vogais.includes(letra)) {
            contador++;
        }
    }

    return contador;
}

console.log(contarVogais("JAVASCRIPT"));
/*

//🔴 Nível Avançado
const listaProdutos = [{ nome: "Notebook", preco: 3500, estoque: 5 }, { nome: "Teclado", preco: 600, estoque: 10 }, { nome: "Mouse", preco: 200, estoque: 0 }]
const disponivel = listaProdutos.filter(listaProdutos => listaProdutos.estoque > 0);
disponivel.forEach(p => console.log(`Disponivel: ${p.nome}`));

const listaCompra = [{ nome: "Notebook", preco: 3000, estoque: 1 }, { nome: "Teclado", preco: 500, estoque: 1 }, { nome: "Mouse", preco: 500, estoque: 2 }]
const soma = listaCompra.reduce((acumulador, item) => { return acumulador + (item.preco * item.estoque) }, 0);
console.log(`Total: ${soma}`);



const listaProdutos = [{ nome: "Notebook", preco: 3500.0 }, { nome: "Teclado", preco: 600.0 }, { nome: "Mouse", preco: 200.0 }]

const maiorPreco = listaProdutos.reduce((maior, atual) => atual.preco > maior.preco ? atual : maior);
const menorPreco = listaProdutos.reduce((menor, atual) => atual.preco < menor.preco ? atual : menor);

console.log('Produto mais caro:', maiorPreco);
console.log('Produto mais barato:', menorPreco);


let aluno = [{ nome: "Carlos", idade: 20, notas: [7, 8, 9] }, { nome: "Pedro", idade: 20, notas: [10, 10, 10] }]
function desempenho(listaAlunos) {

    listaAlunos.forEach(aluno => {
        const soma = aluno.notas.reduce((acumulador, notaAtual) => acumulador + notaAtual, 0);

        const media = soma / aluno.notas.length;
        if (media > 7) {
            console.log(`Aluno: ${aluno.nome} | Média ${media.toFixed(1)} | Aprovado`);
        } else {
            console.log(`Aluno: ${aluno.nome} | Média ${media.toFixed(1)} | Reprovado`);

        }
    });

}
desempenho(aluno);


function contarPalavras(frase) {

    const palavras = frase.toLowerCase().split(/\s+/);

    const contagem = {};

    palavras.forEach(palavra => {
        if (palavra) {
            contagem[palavra] = (contagem[palavra] || 0) + 1;
        }
    });

    return contagem;
}

const texto = "javascript é legal e javascript é poderoso";
const resultado = contarPalavras(texto);
console.log(resultado);


const funcionarios = [
    { nome: "João", cargo: "Desenvolvedor", salario: 5000 },
    { nome: "Maria", cargo: "Designer", salario: 4200 },
    { nome: "Pedro", cargo: "Gerente de Projetos", salario: 8000 },
    { nome: "Ana", cargo: "Analista de QA", salario: 3800 },
    { nome: "Lucas", cargo: "Suporte Técnico", salario: 2900 }
];

function listarFuncionarios(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(`Nome: ${lista[i].nome} | Cargo: ${lista[i].cargo} | Salário: R$ ${lista[i].salario.toFixed(2)}`);
    }
}

function calcularSalarioMedio(lista) {
    let totalSalarios = 0;
    let i = 0;

    while (i < lista.length) {
        totalSalarios += lista[i].salario;
        i++;
    }

    return totalSalarios / lista.length;
}

function encontrarMaiorSalario(lista) {
    if (lista.length === 0) return null;

    let maior = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i].salario > maior.salario) {
            maior = lista[i];
        }
    }
    return maior;
}

function encontrarMenorSalario(lista) {
    if (lista.length === 0) return null;

    let menor = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i].salario < menor.salario) {
            menor = lista[i];
        }
    }
    return menor;
}

function aplicarAumentoPercentual(lista, percentual) {
    for (let i = 0; i < lista.length; i++) {
        lista[i].salario += lista[i].salario * (percentual / 100);
    }
    console.log(`\nAumento de ${percentual}% aplicado com sucesso a todos os funcionários!`);
}


function mostrarAcimaDaMedia(lista) {
    const media = calcularSalarioMedio(lista);
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].salario > media) {
            console.log(`- ${lista[i].nome}: R$ ${lista[i].salario.toFixed(2)}`);
        }
    }
}

listarFuncionarios(funcionarios);
const maior = encontrarMaiorSalario(funcionarios);
const menor = encontrarMenorSalario(funcionarios);
console.log(`\nMaior salário: ${maior.nome} (R$ ${maior.salario.toFixed(2)})`);
console.log(`Menor salário: ${menor.nome} (R$ ${menor.salario.toFixed(2)})`);

mostrarAcimaDaMedia(funcionarios);
aplicarAumentoPercentual(funcionarios, 10);
listarFuncionarios(funcionarios);
*/
