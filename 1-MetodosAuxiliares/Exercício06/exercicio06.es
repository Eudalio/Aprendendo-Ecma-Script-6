console.log("Dada uma lista de objetos que contém o nome de um aluno e sua média final, crie o método 'aprovados' que recebe esta lista e retorna somente os alunos que foram aprovados.");
console.log("Para isto, utilize o método filter.");
console.log("Exemplo: aprovados(alunos, 6.5) → [ { nome: 'Julia', media: 9.5 } ]");

var alunos = [
    { nome: 'Diogo', media: 5.5 },
    { nome: 'Julia', media: 9.5 },
    { nome: 'Roberto', media: 1.5 },
    { nome: 'Tiago', media: 6.0 }
  ];

  var aprovados = alunos.filter(function(aluno){
    return aluno.media >= 7;
  });

  console.log(aprovados);