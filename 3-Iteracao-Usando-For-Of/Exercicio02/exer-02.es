console.log("Um jovem programador tentou utilizar o laço de repetição for...of no objeto Casa na esperança de que o laço passasse por todas as propriedades deste objeto. No entanto, ele só recebeu o erro: TypeError: Casa[Symbol.iterator] is not a function. Por que não está funcionando?");
console.log("Este foi o código que ele tentou executar:");


console.log("");
console.log("");
console.log("Porque o For Of só funciona para objetos que ele sabe como iterar, pois debaixo dos panos o For Of executa o Symbol.iterator. E neste caso ele não sabe como iterar sobre um objeto Casa, precisa ser ensinado.");

var Casa = {
    metrosQuadrados: 4000,
    altura: 3000,
    nQuartos: 4,
    nBanheiros: 2
  
    //...
  }
  
  
  for(var atributo of Casa) {
    console.log(atributo);
  }