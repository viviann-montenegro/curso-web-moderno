/*
    Desafio #1 - Função Construtora
    Utilize uma função construtora para instanciar um objeto semelhante à classe e à factory abaixo:

    //classe
    class Pessoa {
        constructor(nome) {
            this.nome = nome
        }

        falar() {
            console.log(`Meu nome é ${this.nome}`)
        }
    }
    
    const p1 = new Pessoa('João')
    p1.falar()

    //factory
    const criaPessoa = nome => { 
        return {
            falar: () => console.log(`Meu nome é ${nome}`)
        }
    }

    const p2 = criaPessoa('Maria')
    p2.falar()
*/

//construtora
function criarPessoa(nome) {
    this.nome = nome //opcional

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new criarPessoa('Joana')
p3.falar()