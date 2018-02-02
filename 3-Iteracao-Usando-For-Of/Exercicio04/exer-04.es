console.log("Implemente o método percorreRuas que recebe uma lista de strings que representam nomes de ruas e um segundo parâmetro que também é um string, mas representa o nome da rua em que deve parar. Para cada rua percorrida, deve ser apresentada no console, como neste exemplo:");

console.log("Exemplo: percorreRuas(['Rua 1, Rua 2', 'Rua 3'], 'Rua 2') → 'Rua 1' , 'Rua 2'");

console.log("Utilize o laço for...of e o break para não percorrer mais ruas que o necessário.");

function percorreRuas(ruas, myRua){
    for (const rua of ruas) {
        console.log(rua);        
        if(rua === myRua){
            break;
        }
    }
}

console.log(percorreRuas(['Rua 1', 'Rua 2', 'Rua 3'], 'Rua 2'));