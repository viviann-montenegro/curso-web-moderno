//arrow function -> sintaxe reduzida e this fixo ao contexto léxico da criação da função
//sintaxe reduzida
let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { 
    return 2 * a
}
//function arrow sempre é anonima, então para chamada posterior precisa armazenar em variavel

dobro = a => 2 * a //unico parametro -> sem parenteses, retorno implicito -> sem 'return'

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' //O bloco é opcional, mas se tiver bloco precisa ter 'return' para não ter undefined como retorno
ola = _ => 'Olá'//'_' é parâmetro, porém será ignorado -> redução de sintaxe

console.log(ola())

//this fixo
function Pessoa() {
    this.idade = 0

    /*setInterval(() => { //uso de arrow function para não altear o this em setInterval, sem usar bind ou const self
        this.idade++
        console.log(this.idade)
    }, 1000)*/ //comentado para não travar o código
}

new Pessoa

//this fixo de arrow function e bind
let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) //true, contexto global do node

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //false, bind com obj
comparaComThis(obj) //true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //false, contexto léxico da função é o módulo corrente (arquivo)
comparaComThisArrow(module.exports) //true, modulo corrente

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //false, arrow function não altera com bind
comparaComThisArrow(module.exports) //true, continua associado ao contexto da escrita da função