//'this' é uma forma de referenciar o objeto atual da execução dentro do contexto
//função normal -> varia conforme o contexto de chamada da função
//função arrow -> não varia nunca, é definido pelo contexto léxico de criação da função

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() //'undefined' pois o 'this' agora é diferente, não aponta mais para pessoa pois está em outro contexto
//conflito entre o paradigma funcional e o orientado a objetos

const falarDePessoa = pessoa.falar.bind(pessoa) //função bind 'amarra' o 'this' conforme indicado, neste caso à pessoa
falarDePessoa()

function Pessoa() {
    this.idade = 0

    const self = this //armazena o this de Pessoa na constante self para usar dentro de 'setInterval'
    setInterval(function () { //dispara outra função a partir do intervalo informado (temporizador)
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) //1000 milissegundos -> a cada segundo dispara a função
    //usar bind fixa o this de Pessoa para a função 'setInterval'
}

new Pessoa