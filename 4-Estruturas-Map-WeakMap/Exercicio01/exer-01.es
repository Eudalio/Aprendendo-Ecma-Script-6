console.log("Crie um método chamado possuiProduto que recebe dois parâmetros:");
console.log("produtos: Mapa com nome e preço dos produtos (ex: 'Feijão: 2.30')");
console.log("produtoDesejado: String que representa o nome do produto desejado");
console.log("Faça com o método retorne true caso o produto esteja contido no mapa, caso contrário, devolva false.");
console.log("Considere o mapa a seguir:");

var produtos = new Map();
produtos.set('Arroz', 7.10);
produtos.set('Feijão', 2.30);
produtos.set('Macarrão', 4.70);
produtos.set('Refrigerante', 3.00);

function possuiProduto(produtos, produtoDesejado){
    return produtos.has(produtoDesejado);
}

console.log("testando se funciona: " + possuiProduto(produtos,'Refrigerante'));