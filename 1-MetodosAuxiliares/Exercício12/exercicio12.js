console.log("Crie um método chamado existeProdutosDatados que recebe um parâmetro chamado produtos que é um array de produtos e identifica se há algum produto que está acima da data de validade. Caso existe, deve voltar true, caso contrário, false. Cada produto tem as seguintes características:");
console.log("nome: String que representa o nome do produto");
console.log("preco: Número que representa o preço do produto");
console.log("dataValidade: Data de validade do produto");
console.log("O método também deve aceitar um segundo parâmetro dataReferencia. Se passado, o método deve fazer a comparação de validade em relação a ele, caso contrário, utiliza a data da execução como parâmetro.");
console.log("Tome como exemplo os produtos a seguir:");

var produtos = [
    { nome:'Cereal', preco:'10', dataValidade:'21/02/2017' },
    { nome:'Suco de Abacaxi', preco:'12', dataValidade:'01/01/2017' },
    { nome:'Torta de frango', preco:'25', dataValidade:'07/07/2017' }
  ];

console.log("Exemplo: existeProdutosDatados(produtos, '2017-03-01') → true");
console.log("existeProdutosDatados(produtos,'2016-01-01') → false");

function existeProdutosDatados(produtos, data) {
    var dataReferencia = new Date();
    if(data) dataReferencia = new Date(data);
    return produtos.some(function(produto) {
      return new Date(produto.dataValidade) < dataReferencia;
    });
  }

  console.log("Exemplo 1: " + existeProdutosDatados(produtos, '2017-03-01'));
  console.log("Exemplo 2: " + existeProdutosDatados(produtos,'2016-01-01'));