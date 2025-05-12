//a notação ponto é utilizada para acessar membros de elementos, sejam eles funções/métodos ou atributos
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola' //um atributo pode ser criado de forma dinâmica através da notação ponto
//também poderia ser criado/acessado como obj1['nome'], mas não é recomendado

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()