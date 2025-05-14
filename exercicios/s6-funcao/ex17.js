/*
    Exercicio #17 - Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo 
    com a tabela abaixo:
    Plano   Aumento
    A       10%
    B       15%
    C       20%
    Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o 
    seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
*/

function aumento(salario, plano) {
    switch(plano) {
        case 'A': case 'a':
            salario = salario + salario * 10 / 100
            console.log(`O valor do novo salário é R$ ${salario.toFixed(2).replace('.', ',')}`)
            break
        case 'B': case 'b':
            salario = salario + salario * 15 / 100
            console.log(`O valor do novo salário é R$ ${salario.toFixed(2).replace('.', ',')}`)
            break
        case 'C': case 'c':
            salario = salario + salario * 20 / 100
            console.log(`O valor do novo salário é R$ ${salario.toFixed(2).replace('.', ',')}`)
            break
        default:
            console.log('Este plano é inválido')
    }
}

aumento(1000,'a')
aumento(1000,'B')
aumento(1000,'c')
aumento(1000,'D')