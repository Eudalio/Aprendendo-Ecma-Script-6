console.log("Implemente o método deletaAmigos que recebe dois parâmetros:");
console.log("amigos: Mapa com relação de nome e informações sobre os amigos");
console.log("exAmigos: Lista com nome dos amigos que deve ser deletado");
console.log("Para cada nome em exAmigos, você deve:");
console.log("Verificar se nome consta na lista. Se sim, deletá-lo e imprimir no console: ' foi deletado!'");
console.log("Se o nome não estiver no mapa de amigos, exibir no console para o usuário: ' não é seu amigo!'");
console.log("Considere os seguintes amigos para este exercícios:");

var amigos = new Map();
amigos.set('João Silva', {idade:23, sexo:'masculino'});
amigos.set('Luisa Pimenta', {idade:18, sexo:'feminino'});
amigos.set('Julio Marinho', {idade:52, sexo:'masculino'});
amigos.set('Marcela Mel', {idade:27, sexo:'feminino'});

function deletaAmigos(amigos, exAmigos){
    for (const exAmigo of exAmigos) {
        if(amigos.has(exAmigo)){
            amigos.delete(exAmigo);
            console.log(exAmigo + " foi deletado!");
        }else console.log(exAmigo + " não é seu amigo!");
    }
}

console.log(deletaAmigos(amigos, ['eudálio','João Silva']));