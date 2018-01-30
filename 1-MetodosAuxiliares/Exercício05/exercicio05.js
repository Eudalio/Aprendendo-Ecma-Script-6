console.log("Faça uma função chamada removeDuplicatas que recebe um array de números inteiros e remove todas as suas duplicadas.");
console.log("Utilize as funções auxiliares: reduce e find.");
console.log("Exemplo: removeDuplicatas([1,2,3,3,4,5]) → [1,2,3,4,5]");

function removeDuplicatas(numeros){
    return numeros.reduce(function(arrayNovo, numeroAtual){
        var existeDuplicata = arrayNovo.find(function(numeroAtualComparacao){
            return numeroAtual === numeroAtualComparacao;
        });

        if(!existeDuplicata){
            arrayNovo.push(numeroAtual);
        }
        //console.log(arrayNovo);
        return arrayNovo;
    },[]);
}

console.log(removeDuplicatas([1,2,3,3,4,5]));