console.log("Um aluno do curso de computação está tentando executar o código a seguir: ");
console.log("var musica1 = {" + 
    "titulo: 'O amor não tem rollback',"+
    "autor: 'SQL'}" + 
  
  "var musica2 = {"+
    "titulo: 'Nada se componentiza a você',"+
    "autor: 'React'}" +
  
  "var musicas = new WeakSet([musica1, musica2]);" + 
  "for(var musica of musicas){" + 
    "console.log(musica);}" );
console.log("Mas sempre que ele tenta executar este código, ele dá erro. Você sabe dizer qual é o problema?");

console.log("R: Ao contrário do Set, o WeakMap não é uma estrutura iterável. Isso significa que não é possível utilizar o laço de repetição for...of nela, por isso dá o erro sempre que executado: TypeError: musicas[Symbol.iterator] is not a function.");