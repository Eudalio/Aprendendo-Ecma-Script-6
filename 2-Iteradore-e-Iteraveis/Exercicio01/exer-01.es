console.log("Implemente uma função chamada calculaDistancia que recebe uma lista de objetos que representam ruas e faça a soma de seus tamanhos. Cada objeto rua da lista possui as seguintes propriedades:");
console.log("nome: String que representa o nome da rua");
console.log("tamanho: Número intero que representa a comprimento da rua em metros");
console.log("Utilize somente os conceitos que foram apresentados neste capítulo para iterar as ruas. Assuma que sempre haverá pelo menos uma rua no array.");
console.log("Tome como exemplo, a entrada abaixo.");

var ruas = [
    { nome:'Rua 1', tamanho: 2500 },
    { nome:'Rua 2', tamanho: 3400 },
    { nome:'Rua 3', tamanho: 1400 }
];

console.log("Exemplo: calculaDistancia(ruas) → 7300");
//console.log(ruas.length);
var iterador = ruas[Symbol.iterator]();
var proximo = iterador.next();
function calculaDistancia(ruas){
    var soma = 0;
    for(var i = 0; !proximo.done; proximo = iterador.next()){
        //console.log(proximo.value.tamanho);
        soma += proximo.value.tamanho;
    }
    return soma;
}

console.log("Resultado: " + calculaDistancia(ruas));