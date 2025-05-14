const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

//template string suporta quebra de linhas e interpolação de variáveis no texto
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`) //é possível realizar expressões matemáticas

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`) //é possível utilizar funções dentro da expressão