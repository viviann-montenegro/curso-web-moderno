const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) //retorna array com as chaves
console.log(Object.values(pessoa)) //retorna array com os valores
console.log(Object.entries(pessoa)) //retorna array de arrays com chave e valor respectivos

Object.entries(pessoa).forEach(([chave, valor]) => { //usando destructuring
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', { //define uma propriedade com configurações
    enumerable: true,
    writable: false,
    value: '01/01/2019'
}) 

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)