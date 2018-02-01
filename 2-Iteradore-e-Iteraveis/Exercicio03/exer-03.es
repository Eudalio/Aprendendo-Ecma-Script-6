console.log("Utilizando os aprendizados deste capítulo, implemente a função soletraPalavra que recebe como único parâmetro uma String e então exibe cada letra da String em uma linha do console.");
console.log("Vamo ver se dar certo: " + soletraPalavra("teste"));

function soletraPalavra(palavra){
    var vetPalavra = palavra.split('');
    var iterador = vetPalavra[Symbol.iterator]();
    for(var next = iterador.next(); !next.done; next = iterador.next()){
        console.log(next.value);
    }
}
