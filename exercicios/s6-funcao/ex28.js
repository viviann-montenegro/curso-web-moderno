/*
    Exercicio #28 - Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
*/

function quantosPareseImpares(valores) {
    let pares = 0
    let impares = 0
    for (let valor in valores) {
        if (valores[valor] % 2 === 0) {
            pares++
        } else {
            impares++
        }
    }
    console.log(`Dos números ${valores}, ${pares} são pares e ${impares} são impares`)

}

quantosPareseImpares([1,2,3,4,5,6,8])
quantosPareseImpares([1,1,11,1,1,1,1])