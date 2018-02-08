console.log(`Considere o trecho de código abaixo e responda as questões:`);
console.log(`var arrayFuncoes = [];
for(var i = 0; i < 10; i++){
  arrayFuncoes.push(function(){
    console.log(i);
  });
}

arrayFuncoes.forEach(function(funcao){
  funcao();
});`);
console.log(`a) Quais os valores são exibidos no console na execução desse código?`);
console.log(`R: O console exibe o valor 10, 10 vezes.`);
console.log(`b) Como podemos ajustar o comportamento desta função utilizando ES6?`);
console.log(`R: Apenas substituindo na declaração da variável "i", de var para let. `);