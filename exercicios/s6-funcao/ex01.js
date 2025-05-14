/*
    Exercicio #1 - Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, 
    subtração, multiplicação e divisão desses valores.
*/ 

function operacoes(x, y) {
    let soma = x + y
    let sub = x - y
    let mult = x * y
    let div = x / y
    console.log(`A soma de ${x} e ${y} vale ${soma}`)
    console.log(`A subtração entre ${x} e ${y} vale ${sub}`)
    console.log(`A multiplicação de ${x} e ${y} vale ${mult}`)
    console.log(`A divisão de ${x} por ${y} vale ${div}`)
}

operacoes(1,2)