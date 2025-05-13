//função em JS é um cidadão de primeira ordem -> função é trabalhada como dado, pode ser armazenada em variável,
//passada como parametro, retornada por outra função, etc.

//forma literal
function fun1() { } //na função o bloco é obrigatório

//armazenar em variável
const fun2 = function () { } //função anônima atribuída à constante

//armazenar em array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

//passar função como parametro
function run(fun) {
    fun()
}

run(function () {console.log('Executando...')})

//retornar função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)

//parametros e retornos são opcionais
function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acma do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2)) //NaN
console.log(area()) //NaN
console.log(area(2, 3, 17, 22, 44)) //usa apenas os dois primeiros parametros neste caso
console.log(area(5, 5)) //retorna 'undefined'

//parametros podem ser variaveis
function soma2() {
    let soma = 0
    for (i in arguments) { //'arguments' é um array interno que recebe os parametros que a função recebe
        soma += arguments[i]
    }
    return soma
}

console.log(soma2())
console.log(soma2(1))
console.log(soma2(1.1, 2.2, 3.3))
console.log(soma2(1.1, 2.2, 'Teste'))
console.log(soma2('a', 'b', 'c'))

//parametro padrão
function soma3(a, b, c) { //usando ou para determinar valor padrão
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0)) //para 0,0,0 não funciona na estratégia com ou

function soma4(a, b, c) { //estratégias com op. ternário
    a = a !== undefined ? a : 1 //excluir 'undefined' estrito
    b = 1 in arguments ? b : 1 //verificar se o argumento existe em 'arguments' com indice 1
    c = isNaN(c) ? 1 : c //verificar se é um numero -> mais seguro
    return a + b + c
}
console.log(soma4(), soma4(3), soma4(1, 2, 3), soma4(0, 0, 0))

function soma5(a = 1, b = 1, c = 1) { //usando o valor padrão em JS não é necessário -> mais indicado
    return a + b + c
}

console.log(soma5(), soma5(3), soma5(1, 2, 3), soma5(0, 0, 0))