console.log("Resolva o problema do Exercício 2 utilizando a estrutura for...in.");

var Casa = {
    metrosQuadrados: 4000,
    altura: 3000,
    nQuartos: 4,
    nBanheiros: 2
  
}
  
  
  for(var atributo in Casa) {
    console.log(atributo);
  }