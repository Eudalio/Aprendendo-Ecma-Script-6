console.log("Desenvolva a função 'isListaVazia' que recebe como parâmetro uma lista de números inteiros qualquer e retorna o valor true caso esta lista não tenha nenhum item e false para os demais resultados. A lógica deve ser feita usando somente a propriedade done do objeto que é obtido ao executar o next no iterador do array.");

var vet = [1,2];

function isListaVazia(numeros){
    return numeros[Symbol.iterator]().next().done;
}

console.log("Testando se ta dando certo: " + isListaVazia(vet));