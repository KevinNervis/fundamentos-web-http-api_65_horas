function tabuada(numero){
    for (let i = 1; i <= 10; i++) {
        const resultado = numero*i;
        console.log(resultado)

    }
}
const resultado = tabuada(10);

let frutas = ["Maça","Morango", "Banana", "Uva","Pera"]
for(let i = 0; i < frutas.length; i++ ){
    console.log(frutas[i]);
}

let numeros = [1,2,3,4];

let maior = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

console.log(maior);
 