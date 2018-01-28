//Escreva o método caps que recebe um array de strings e retorna um outro 
//array com todas as strings do array original em CAIXA ALTA.

console.log("Exemplo: caps(['oi', 'tudo', 'bem?']) → ['OI', 'TUDO', 'BEM?']");
var vet = ["['oi'", "'tudo'", "'bem?']"];
var caps = [];
console.log("Vetor original " + vet);
vet.map(function(palavra){
    caps.push(palavra.toLocaleUpperCase());
});

console.log("Vetor em caixa alta " + caps);
