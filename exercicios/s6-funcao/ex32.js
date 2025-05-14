/*
    Exercicio #32 - Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
*/

function calculaMediaAritmetica(valores) {
    let contador = 0
    let soma = 0
    for (let valor in valores) {
        soma += valores[valor]
        contador++
    }
    let media = soma / contador
    console.log(`A média aritmética dos números ${valores} é ${media.toFixed(1)}`)
}

calculaMediaAritmetica([1,2,3,4,5,6])
calculaMediaAritmetica([5,5,5])