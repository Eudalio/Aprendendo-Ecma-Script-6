console.log("Implemente o método 'calculaValorTotalDaCompra' que recebe quatro parâmetros:");
console.log("caixa: Lista com o nome dos produtos comprados");
console.log("cidade: String que representa o nome da cidade");
console.log("caixa: Mapa que contém relação de produtos e preços");
console.log("fretes: Mapa que contém relação de cidades e fretes");
console.log("Calcule o preço total da compra junto com o frete de acordo com as tabelas a seguir:");
console.log("Exemplo: calculaValorTotalDaCompra(['Arroz'], 'São Paulo', caixa, fretes) → 7.20");

var caixa = new Map();
caixa.set('Arroz', 7.10);
caixa.set('Feijão', 2.30);
caixa.set('Macarrão', 4.70);
caixa.set('Refrigerante', 3.00);

var fretes = new Map();
fretes.set('São Paulo', 10.10);
fretes.set('Rio de Janeiro', 12.30);
fretes.set('Brasília', 14.70);
fretes.set('Outros', 13.00);

function calculaValorTotalDaCompra(produtos, cidade, caixa, fretes){
    var vt = 0;
    for (const produto of produtos) {
        vt += caixa.get(produto);
    }
    var frete = 0;
    if(fretes.has(cidade)){
        frete = fretes.get(cidade);
    }
    return (vt + frete);
}

console.log("testando se funciona: .. " + calculaValorTotalDaCompra(['Arroz'], 'São Paulo', caixa, fretes));