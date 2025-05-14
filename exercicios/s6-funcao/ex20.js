/*
    Exercicio #20 - Crie um programa para informar quais e quantas notas são necessárias para entregar o 
    mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, 
    R$ 10 e R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar 
    R$18, o programa deve informar apenas a seguinte informação (note que não foram exibidas informações 
    sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function cedulas(valor) {
    let restante = valor
    if(valor > 100) {
        let nota100 = parseInt(valor / 100)
        restante = valor % 100
        console.log(`${nota100} nota(s) de R$ 100,00`)
    }
    if (restante > 50) {
        let nota50 = parseInt(restante / 50)
        restante = restante % 50
        console.log(`${nota50} nota(s) de R$ 50,00`)
    }
    if (restante > 10) {
        let nota10 = parseInt(restante / 10)
        restante = restante % 10
        console.log(`${nota10} nota(s) de R$ 10,00`)
    }
    if (restante > 5) {
        let nota5 = parseInt(restante / 5)
        restante = restante % 5
        console.log(`${nota5} nota(s) de R$ 5,00`)
    }
    let nota1 = restante
    if (nota1 > 0) {
        console.log(`${nota1} nota(s) de R$ 1,00`)
    }    
}

cedulas(588)