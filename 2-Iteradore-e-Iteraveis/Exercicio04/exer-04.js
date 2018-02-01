console.log("Crie o método 'criaIterador' que recebe como parâmetro uma lista e então o devolve um objeto que possui o mesmo comportamento de um iterador, ou seja, que possui o método next que toda vez que invocado, retorna um objeto com as propriedades: value e done.");

console.log("Exemplo: criaIterador([1,2]).next() → { value: 1, done: false }");

function criaIterador(array) {
    var proximoIndice = 0;
 
     return {
        next: function() {
            if(proximoIndice < array.length) {
              return { value: array[proximoIndice++], done: false };
            } else {
              return { value: undefined, done: true };
            }
        }
     };
 
 }

console.log("Testando.... : " + "value: " + criaIterador([1,2]).next().value + ", done: " + criaIterador([1,2]).next().done);