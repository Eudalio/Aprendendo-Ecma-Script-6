console.log("Crie uma função chamada calculaRaizesQuadradas que recebe um array de números inteiros positivos e devolve um outro array com as raízes quadradas correspondentes de cada um dos itens.");
console.log("para este exercício, assuma que a entrada terá somente números com raiz exata.");
console.log("utilize a função Math.sqrt para calcular a raiz quadrada");

function calculaRaizesQuadradas(numeros){
    return numeros.map(function(numero){
        return Math.sqrt(numero);
    });
}
var numeros = [1,4,9,16,25,36,49,64];
console.log(calculaRaizesQuadradas(numeros));