console.log("Implemente o método 'percorreRuas' que recebe dois parâmetros:");
console.log("ruas: Lista de strings que presentam as ruas que serão percorridas (ex: 'Rua 1')");
console.log("ruaPerigosa: String que represeta o nome da rua que deve ser evitada");
console.log("Faça com que o método percorra cada uma das ruas exibindo no console, menos para a ruaPerigosa. Utilize o for...of e o continue para fazer esta lógica.");


function percorreRuas(ruas, evitar){
    for (const rua of ruas) {
        if(rua === evitar) continue;
        console.log(rua);
    }
}

percorreRuas(['Rua 1', 'Rua 2', 'Rua 3'], 'Rua 2');