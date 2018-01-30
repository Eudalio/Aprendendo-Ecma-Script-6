console.log("Utilizando a função auxiliar reduce, escreva uma função chamada validaParenteses que avalia se os parênteses estão balanceados. Isso significa que, pra cada parênteses esquerdo “(“ é necessário ter um parênteses direito “)” correspondente. A função deve aceitar uma string e retornar um valor booleano (true ou false).");
console.log("Exemplo: validaParenteses(')((()()())))'); → false");
console.log("Exemplo: '()()()' → true");
console.log("Exemplo: ')(' → false");

function validaParenteses(parenteses) {
    var arrayParenteses = parenteses.split(""); // reduce só funciona com arrays
    /**
     * Vamos utilizar números para essa solução. Para cada parêntese esquerdo, vamos
     * somar 1 e para cada parêntese direito vamos subtrair um
     **/
    var balanceado =  !arrayParenteses.reduce(function(soma, parentese) {
      if(soma < 0) { return soma } // para o caso de começar com ")"
      if(parentese ===  "(") { return ++soma }
      if(parentese ===  ")") { return --soma }
    }, 0);
    return balanceado;
}  

console.log(validaParenteses(')((()()())))'));
console.log(validaParenteses('()()()'));
console.log(validaParenteses(')('));