//Utilizando o método map, escreva o método dobrar
//que recebe um array de números inteiros e retorna um 
//array com todos os valores do array original dobrados.
console.log("Inicio Exercicio 02");
console.log("Exemplo: dobrar([1,2,3]) → [2,4,6]");

var numeros = [1,2,3];
var dobro = numeros.map(function(numero){
    return numero * 2;
});

console.log(dobro);
console.log(numeros);

console.log("Fim Exercicio 02");