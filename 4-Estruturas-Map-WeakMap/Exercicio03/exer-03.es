console.log("Em que situações devemos usar uma implementação de Map ao invés de uma implementação de objeto literal?");

console.log("R: Há algumas perguntas que podemos nos fazer que nos ajudam a decidir quando um Map ou um objeto literal:");
console.log("As chaves são desconhecidas até o tempo de execução, você precisa procurá-las dinamicamente?");
console.log("Todos os valores sempre serão do mesmo tipo, e podem ser usados de forma intercambiável?");
console.log("Você precisa de chaves que não são Strings?");
console.log("Os pares chave/valor são adicionados ou removidos frequentemente?");
console.log("Você tem uma quantidade de pares chave/valor arbitrária (de troca fácil)?");
console.log("A coleção é iterada?");
console.log("Se as respostas para as perguntas forem positivas, são sinais de que você provavelmente deve usar uma instância de Map.");