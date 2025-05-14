//função fabrica -> função que retorna um objeto
//atributos padrões
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())

//atributos informados
function criarProduto(nome, preco) {
    return {
        nome, //'nome: nome' é opcional
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))

//classe vs. factory
class Pessoa { //classe
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criaPessoa = nome => { //função factory -> vantagem é o objeto ter ciência de seu contexto léxico
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criaPessoa('Maria')
p2.falar()