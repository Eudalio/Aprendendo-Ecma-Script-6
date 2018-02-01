console.log("Escreva uma função chamada somaFaturamento que recebe uma lista de números inteiros e devolve a soma destes valores.");
console.log("Exemplo: somaFaturamento([1,2,3,4]) → 10");

function somaFaturamento(numeros){
    var soma = 0;
    for (const numero of numeros) {
        soma += numero;
    }
    return soma;
}

console.log(somaFaturamento([1,2,3,4]));