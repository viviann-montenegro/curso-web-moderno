//call e apply são formas de chamar uma função indiretamente
//call recebe o contexto (this) e os parametros da função diretamente
//apply recebe o contexto (this) diretamente e os parametros da função em um array
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20 //definindo valores para global para teste
global.desc = 0.1
console.log(getPreco()) //calcula em 'this' global

console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) //parametros diretos: contexto e parametros da função
console.log(getPreco.apply(carro,[0.17, '$'])) //contexto direto e parametros da função em array