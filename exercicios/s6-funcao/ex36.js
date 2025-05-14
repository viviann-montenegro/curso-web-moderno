/*
    Exercicio #36 - Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um 
    número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de 
    cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente 
    se o valor do elemento for maior que 5.
*/

function multiplicaArray(array, num) {
    let novoArray = []
    for (let valor in array) {
        novoArray.push(array[valor] * num)
    }
    console.log(novoArray)
}

function multiplicaArraySeMaiorQue5(array, num) {
    let novoArray = []
    for (let valor in array) {
        if (array[valor] > 5) {
            novoArray.push(array[valor] * num)
        } else {
            novoArray.push(array[valor])
        }
    }
    console.log(novoArray)
}

const array = [1,2,3,4,5,6]

multiplicaArray(array, 2)
multiplicaArraySeMaiorQue5(array, 2)