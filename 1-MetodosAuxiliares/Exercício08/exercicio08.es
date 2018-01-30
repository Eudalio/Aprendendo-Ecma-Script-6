console.log("Crie uma função calculaAreaTotal que recebe um parâmetro:");
console.log("dimensoes: objeto que possui as propriedades altura e comprimento que são números inteiros");
console.log("A função deve retornar a soma de todas as áreas. Tome como base a entrada a seguir:");

var dimensoes = [
    { altura: 10, comprimento: 20},
    { altura: 2, comprimento: 4},
    { altura: 1, comprimento: 1},
    { altura: 50, comprimento: 50}
  ]

console.log("Exemplo: calculaAreaTotal(dimensoes) → 2709");

function calculaAreaTotal(dimensoes){
  return dimensoes.reduce(function(acumulado, dimensao){
      return acumulado + (dimensao.altura * dimensao.comprimento);
  }, 0);
}

console.log(calculaAreaTotal(dimensoes));