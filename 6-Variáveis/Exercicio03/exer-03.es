console.log(`Um programador júnior de uma empresa de software está tentando executar o seguinte código:`);
console.log(`function nomeCompleto(primeiroNome, segundoNome){
  const nomeCompleto = primeiroNome;
  nomeCompleto += ' ' + segundoNome;

  return nomeCompleto;
}`);
console.log(`Ele não consegue entender o que está fazendo de errado. No que ele está errando?`);
console.log(`R: Ele está tentando alterar(fazer uma nova atribuíção) o valor de uma variável cujo valor deveria ser constante, o ES6 não permite isso. Se a variável for ter seu valor alterado deverá ser declarada como let e não como const.`);