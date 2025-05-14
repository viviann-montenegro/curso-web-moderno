/*
    Exercicio #29 - Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte 
    quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui 
    o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.
*/

function quantosNoIntervalo1020(valores) {
    let dentro = 0
    let fora = 0
    for (let valor in valores) {
        if ((valores[valor] >= 10) && (valores[valor] <= 20)) {
            dentro++
        } else {
            fora ++
        }
    }
    console.log(`Dos números ${valores}, ${dentro} estão no intervalo [10,20] e ${fora} estão fora do intervalo`)
}

quantosNoIntervalo1020([10,15,20,21,18,29,30,50,48])