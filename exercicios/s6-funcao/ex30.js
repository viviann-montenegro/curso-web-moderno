/*
    Exercicio #30 -  Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor 
    dentro do vetor.
*/

function encontraMaiorEMenor(valores) {
    let maiorValor = valores[0]
    let menorValor = valores[0]
    for (let valor in valores) {
        if(valores[valor] > maiorValor) {
            maiorValor = valores[valor]
        }
        if(valores[valor] < menorValor) {
            menorValor = valores[valor]
        }
    }
    console.log(`Dos números ${valores}, o maior número é ${maiorValor} e o menor número é ${menorValor}`)
}

encontraMaiorEMenor([10,15,12,25,89,96,6])