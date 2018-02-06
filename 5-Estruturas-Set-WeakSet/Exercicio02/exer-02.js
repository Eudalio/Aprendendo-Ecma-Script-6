console.log("Qual é a principal diferença entre a estruturas de dados Set e WeakSet?");

console.log("R: No fundo o WeakSet é um Set que não previne os seus elementos de serem coletados pelo Garbage Collector. Uma vez que o elemento não existe mais e seja identificado pelo coletor para ser coletado, ele também é automaticamente removido do WeakSet.");