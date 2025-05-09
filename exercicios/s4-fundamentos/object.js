const prod1 = {} //objetos são declarados com {}
//objetos são declarados de forma dinamica, podem ser incluidos e retirados metodos e propriedades apos a declaração

prod1.nome = 'Celular Ultra Mega' //criação da propriedade 'nome'
prod1.preco = 4998.90 //criação da propriedade preco
prod1['Desconto Legal'] = 0.40 //forma alternativa de criar a propriedade 'Desconto Legal'
//evitar atributos/propriedades com espaço


console.log(prod1) //imprime as propriedades e metodos do objeto

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj1: {
        obj2: 'objeto'
    }
}
//objetos também podem ser criados já com seus atributos e métodos, além de poderem conter outros objetos

console.log(prod2)

const objJson = '{"nome":"teste","atributo":1}'//forma textual Json de um objeto (json: javascript object notation)