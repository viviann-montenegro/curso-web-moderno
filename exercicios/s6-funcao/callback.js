//callback é uma função sendo chamada mediante ocorrência de um evento
const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) //forEach é função do array que chama o parametro para cada item do array
fabricantes.forEach(fabricante => console.log(fabricante))

//diferença entre usar ou não callback
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7) //usando arrow function e callback
console.log(notasBaixas3)

const notasMenorQue7 = nota => nota < 7 //armazenando a arrow em variável para uso posterior -> mais elegante
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)