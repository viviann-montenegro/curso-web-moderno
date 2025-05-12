//Operador de Atribuição (=)
const f = 7
let g = 3

g += f //g = g + f, atribuição aditiva
console.log(g)

g -= 4 //g = g - 4, atribuição subtrativa
console.log(g)

g *= 2 //g = g * 2, atribuição multiplicativa
console.log(g)

g /= 2 //g = g / 2, atribuição divisiva
console.log(g)

g %= 2 //g = g % 2, atribuição modular
console.log(g)

//Operador Destructuring -> desestruturação -> extrai elementos/atributos de estruturas (objetos e arrays)
//uso em objetos
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa //uso do operador em objetos, extraindo atributos do objetos
console.log(nome, idade)

const {nome: n, idade: i} = pessoa //extração de atributos renomeando
console.log(n, i)

const {sobrenome} = pessoa //tentativa de extrair um atributo inexistente
console.log(sobrenome) //exibe undefined

const {endereco: {logradouro}} = pessoa //extração de atributo aninhado
console.log(logradouro)

//const {conta: {numero, agencia}} = pessoa -> gera erro, pois 'conta' não existe em pessoa

//uso em arrays
const [A] = [10]
console.log(A)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9 ,8]
console.log(n1, n3, n5, n6)

const [,[, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)
//possível mas não muito util

// uso em funções com objetos
function rand({min = 0, max = 1000}) { //recebe atributos de objeto por parametros sem uso de notação ponto
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 995}))
console.log(rand({}))
//console.log(rand()) -> gera erro pois não há objeto como parametro, mesmo que vazio

// uso em funções com arrays
function rand2([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand2([50, 40]))
console.log(rand2([992]))
console.log(rand2([, 10]))
console.log(rand2([]))
//console.log(rand2()) -> gera erro pois não há array como parametro, mesmo que vazio

//Operadores Aritméticos -> binários, dois operandos
const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const subtração = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2
//operações tem forma 'infix' operador entre dois operandos

console.log(soma, subtração, multiplicacao, divisao, modulo)

//Operadores Relacionais -> binários, dois operandos
console.log('01)', '1' == 1) //'==' comparação entre os valores, independente do tipo
console.log('02)', '1' === 1) //'===' estritamente igual, comparação entre valores e tipo
console.log('03)', '3' != 3) //'!=' diferença entre valores, independente do tipo
console.log('04)', '3' !== 3) //'!==' estritamente diferente, comparação entre valores e tipo

console.log('05)', 3 < 2) //'<' menor que
console.log('06)', 3 > 2) //'>' maior que
console.log('07)', 3 <= 2) //'<=' menor ou igual a
console.log('08)', 3 >= 2) //'>=' maior ou igual a

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) //independe usar '==' ou '===' pois são valores de referência
console.log('10)', d1 == d2)
console.log('11)', d1.getTime === d2.getTime) //independe usar '==' ou '===' pois ambos são number

console.log('12)', undefined == null) //true, mesmo valor
console.log('13)', undefined === null) //false, tipos diferentes
//é melhor usar o estritamente igual/diferente para separar tipos '==='/'!=='

//Operadores Lógicos -> binários, dois operandos (exceto a negação lógica '!')
function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //'||' -> ou
    const comprarTv50 = trabalho1 && trabalho2 //'&&' -> e
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) -> negação dupla para virar booleano e usa "^", ou exclusivo bitwise
    const comprarTv32 = trabalho1 != trabalho2 //simulação de ou exclusivo com diferença
    const manterSaudavel = !comprarSorvete //'!' -> negação (unário)

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} //objeto com omissão de chave/nome, forma reduzida
}

console.log(compras(true, true)) //sorvete e tv50
console.log(compras(true, false)) //sorvete e tv32
console.log(compras(false, true)) //sorvete e tv32
console.log(compras(false, false)) //saudavel

//Operadores Unários
let num1 = 1
let num2 = 2

//forma 'posfix', operador após o operando -> menor prioridade
num1++ //incremento, soma 1 no valor de 'num1' -> num1 = num1 + 1
console.log(num1)

//forma 'prefix', operador antes do operando -> maior prioridade
--num1 //decremento, subtrai 1 no valor de 'num1' -> num1 = num1 - 1
console.log(num1)

console.log(++num1 === num2--) //true -> o incremento acontece antes da comparação e o decremento depois
console.log(num1 === num2) //false, como já ocorreu o incremento e decremento os valores são diferentes
//indicado evitar pois deixa o código mais complexo e dificil de ler

console.log(++num1) //exibe 3 (a soma acontece antes de exibir)
console.log(num1--) //exibe 3 e depois subtrai 1
console.log(num1) //exibe 2, pois foi subtraido 1 no final da ultima operação

//Operador Ternário, três operandos (expressão lógica avaliada '?' valor se 'true' ':' valor se 'false')
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' //'?' operador ternario, ':' separador true/false
//pode ser informado em função, como na função arrow acima, ou armazenado em variável

console.log(resultado(7.1))
console.log(resultado(6.7))
//equivale à um if/else