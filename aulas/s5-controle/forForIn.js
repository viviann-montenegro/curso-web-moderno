//For -> para -> repetição determinada, é possível simular com while
let contador = 1
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

console.log('Fim')

for (let i = 1; i <= 10; i++) { //Em for a declaração, condição de parada e incremento estão no laço
    console.log(`i = ${i}`)
}

console.log('Fim')

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (i = 0; i < notas.length; i++) { //É possível usar for para navegar em um array
    console.log(`nota = ${notas[i]}`)
}

console.log('Fim')

console.log(i) //declarar 'i' no for sem 'let' permite acessar a variável externamente, o que não é indicado

//for in -> percorrer objetos e arrays
//array
const notas2 = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas2) {
    console.log(i, notas[i])
}

console.log('Fim')

//objeto
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log('Fim')