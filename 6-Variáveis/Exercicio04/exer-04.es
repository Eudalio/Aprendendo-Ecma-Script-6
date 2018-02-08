console.log(`Uma jovem programadora pensou que havia entendido como funcionava a declaração de variáveis com let e const até ver o seguinte trecho de código:`);
console.log(`const jogador = {};
jogador.nome = 'Rodrigo';
jogador.idade = 33;

console.log(jogador.nome  + '_' +  jogador.idade); // saída: Rodrigo_33`);
console.log(`Ela achou que este código não funcionaria, pois havia entendido que não era possível colocar novos valores em variáveis declaradas com const. Por que este código funciona sem problemas?`);
console.log(`R: É necessário ter em mente que um const não se trata de uma variável constante, mas uma referência constante. Em termos práticos, isso significa que o valor não é imutável, é possível adicionar e remover propriedades desta variável. Por isso funcionou.`);