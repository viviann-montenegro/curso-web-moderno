const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica' //criando um atributo com string
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto'] //atributos criados com string só podem ser chamados via string
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: { //objetos podem ter outros dados internamente, como objetos
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{ //objetos podem ter outros dados internamente, como arrays de objetos
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        // ...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante' //é possível usar a forma via string para alterar dados
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores) //undefined
//console.log(carro.condutores.length) //gera erro pois 'condutores' não existe

//formas de criar objetos
//notação literal
const obj1 = {}
console.log(obj1)

//instância da função Object
const obj2 = new Object
console.log(obj2)

//funções construtoras personalizadas
function Produto(nome, preco, desc) {
    this.nome = nome //tornando o atributo 'nome' publico
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.89, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

//função create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//função JSON.parse -> cria objeto a partir de um json
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)