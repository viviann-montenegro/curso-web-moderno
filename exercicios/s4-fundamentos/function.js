console.log(typeof Object) //Object é uma function

class Produto {}
console.log(typeof Produto) //uma class como 'Produto' é uma function

//função é um conceito base dentro de javascript

//criação de uma função sem retorno
function imprimirSoma(a,b) {
    console.log(a + b)
}

imprimirSoma(2,3) //executa a função criada com os parametros informados, retornando 5
imprimirSoma(2) //executa a função usando o parametro informado e 'undefined', retornando NaN
imprimirSoma(2,10,23,34,53) //executa a função usando apenas os 2 primeiros parametros, retornando 12
imprimirSoma() //executa a função usando 'undefined' como paramatros, retornando NaN

//criação de uma função com retorno
function soma(a,b = 0){ //a função tem o parâmetro b como 0 por padrão, caso b não seja informado
    return a + b         //retorna o valor de a + b
}

console.log(soma(2,3)) //imprime o valor do retorno da função com os parametros informados, isto é, 5
console.log(soma(2)) //imprime o valor de retorno da função com o parametro informado e 0, pois b foi definido como 0 por padrão caso não informado
console.log(soma()) //imprime NaN pois usa a = undefined e b = 0

//amarzenar uma função em uma constante/variável
const imprimirSoma = function (a,b) {
    console.log(a + b)
}

imprimirSoma(2,3)

//armazenar função arrow em uma constante/variável -> forma reduzida de construir uma função
const soma = (a,b) => {
    return a + b
}

console.log(soma(2,3))

//retorno implicito -> recurso da função arrow para reduzir ainda mais
const subtracao = (a, b) => a - b //função de só uma linha, retorna automaticamente caso haja retorno

console.log(subtracao(2,3))

const imprimir2 = a => console.log(a) //no caso de uma função arrow com retorno implicito e apenas um parametro não precisa de parenteses
imprimir2("Legal!")