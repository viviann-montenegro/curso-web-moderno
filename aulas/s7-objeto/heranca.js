const ferrari1 = {
    modelo: 'F40',
    velMax: 324
}

const volvo1 = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari1.__proto__) //__proto__ acessa o protótipo do objeto, atributo da função Object, objeto não tem .prototype
console.log(ferrari1.__proto__ === Object.prototype)
console.log(volvo1.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function MeuObjeto1() {}
console.log(typeof Object, typeof MeuObjeto1)
console.log(Object.prototype, MeuObjeto1.prototype)

//Cadeia de protótipos (prototype chain)
const avo1 = {attr1: 'A'}
const pai1 = {__proto__: avo1, attr2: 'B'}
const filho1 = {__proto__: pai1, attr3: 'C'}

console.log(filho1.attr1) //o filho herda do pai e o pai herda do avo, apresenta o atributo attr1: 'A'
//Caso o atributo attr1: '1' estivesse no filho ocorreia o sombreamento do valor presente no avo

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual} Km/h de ${this.velMax}Km/h`
    }
}

const ferrari2 = {
    modelo: 'F40',
    velMax: 324 //sombreamento/shadowing
}

const volvo2 = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //super equivale a this e chama o prototipo
    }
}

Object.setPrototypeOf(ferrari2, carro) //seta carro como prototipo de ferrari2
Object.setPrototypeOf(volvo2, carro)

console.log(ferrari2)
console.log(volvo2)

volvo2.acelerarMais(100)
console.log(volvo2.status())

ferrari2.acelerarMais(300)
console.log(ferrari2.status())

const pai2 = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai2)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai2, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) //mostra atributos do objeto em si, não lista os do pai
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? //hasOwnProperty retorna true para atributos do objeto em si, não de herança
        console.log(key) : console.log(`Por herança: ${key}`)
}

function MeuObjeto2() {}
console.log(MeuObjeto2.prototype)

const obj1 = new MeuObjeto2
const obj2 = new MeuObjeto2
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto2.prototype === obj1.__proto__) 
//objeto criado por função construtora, __proto__ aponta para o prototype da função construtora

MeuObjeto2.prototype.nome = 'Anônimo'
MeuObjeto2.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto2.prototype
obj3.nome = 'Obj3'
obj3.falar()

console.log((new MeuObjeto2).__proto__ === MeuObjeto2.prototype)
console.log(MeuObjeto2.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//todos são funções, todos tem o atributo prototype

//é possível criar métodos além dos disponíveis da API usando o prototype
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())

//um método padrão pode ser alterado, mas não é recomendado, causa efeitos colaterais
String.prototype.toString = function() { 
        return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse()) //reverte 'Lascou tudo' -> efeito colateral de alterar toString()

function Aula(nome, videoID) {
    this.nome = nome
    this.videoId = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

//simulando new
function novo(f, ...params) { //'...' operador spread concatena params como um array
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Aula nova', 789)
console.log(aula3)