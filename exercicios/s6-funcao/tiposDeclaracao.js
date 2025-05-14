//function declaration -> declaração normal -> é possível chama-la no codigo mesmo antes de sua declaração
console.log(soma(3, 4))

function soma(x, y) {
    return x + y
}

//function expression -> atribuição da função anonima à variável
const sub = function (x, y) {
    return x - y
}

//named function expression -> atribuição da função nomeada à variável -> hibrido, pouco usado
const mult = function mult(x, y) {
    return x * y
}