/*
    Exercicio #31 - Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos 
    há nesse vetor e imprime a quantidade no console.
*/

function contaNegativos(valores) {
    let negativos = 0
    for (let valor in valores) {
        if (valores[valor] < 0) {
            negativos++
        }
    }
    console.log(`Dos números ${valores}, ${negativos} são negativos`)
}

contaNegativos([1,2,3])
contaNegativos([-1,2,-3])
