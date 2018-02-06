console.log("Implemente o método 'removeDuplicatas' quer recebe o seguinte parâmetro:");
console.log("numeros: lista de números inteiros positivos");
console.log("O método deve retornar a lista de número sem repetições. Utilize a estrutura de dados Set para resolver este problema.");
console.log("Exemplo: removeDuplicatas([1,1,2,2,3,3]) → [1,2,3]");

function removeDuplicatas(numeros){
    return new Set(numeros).size;
}

console.log("testando se funciona: ... " + removeDuplicatas([1,1,2,2,3,3]));