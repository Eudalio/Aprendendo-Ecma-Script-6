console.log("Utilizando o método auxiliar forEach, crie uma função clonaObjeto que recebe como parâmetro um objeto e cria uma cópia exata dela.");

console.log("utilize o método Object.getOwnPropertyNames para obter as propriedades do objeto");

function clonaObjeto(alvo) {
    var propriedades = Object.getOwnPropertyNames(alvo);
    var copia = {};
    propriedades.forEach(function(propriedade) {
      copia[propriedade] = alvo[propriedade];
    });
    return copia;
  }
  var obj = [1,2,3];
  console.log("objeto original: " + obj);
  console.log("cópia do objeto: ");
  console.log(clonaObjeto([1,2,3]));