//pessoa -> 123 (end. memória) -> {...} (valores do objeto)
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro' //não é alterada a constante, e sim o valor dos dados no endereço de memoria que a constante aponta
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'} -> geraria um erro porque a constante estaria sendo alterada

Object.freeze(pessoa) //congela o objeto, não é possível mexer nele -> objeto constante
pessoa.nome = 'Maria' //não gera erro, mas não altera o atributo
pessoa.end = 'Rua ABC' //não adiciona novos atributos
delete pessoa.nome //não deleta atributos

console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)