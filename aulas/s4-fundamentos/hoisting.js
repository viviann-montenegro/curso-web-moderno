console.log('a =', a) //consegue ler a variável a mesmo sendo declarada após o comando, 
// pois ocorre o içamento - hoisting, porém a variável estará 'undefined' pois não houve atribuição
var a = 2
console.log('a =', a) //imprime o valor atribuido da variável

//o hoisting pode acontecer dentro ou fora de funções, mas não é indicado utilizar

//console.log('b =', b) -> gera um erro pois o hoisting não acontece com let, apenas var
let b = 2
console.log('b =', b) //imprime o valor atribuido da variável