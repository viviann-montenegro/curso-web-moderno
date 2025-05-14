/*
    Exercicio #38 - Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir 
    todos os números ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e
    100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do 
    menor.
*/

function imprimeImparesEntre(inicio = 0, fim = 100) {
    if (inicio > fim) {
        let temp = inicio
        inicio = fim
        fim = temp
    }

    let impares = []
    for (let num = inicio; num < fim; num++) {
        if (num % 2 !== 0) {
            impares.push(num)
        }
    }
    console.log(`Os números ímpares entre ${inicio} e ${fim} são ${impares}`)
}

imprimeImparesEntre()
imprimeImparesEntre(7,24)
imprimeImparesEntre(30,5)