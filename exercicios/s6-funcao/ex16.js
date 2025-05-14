/*
    Exercicio #16 - Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica:
    O programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize 
    com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função 
    efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default 
    para operações inválidas.
*/

function calculadora(num1, op, num2) {
    switch(op) {
        case '+':
            console.log(`${num1} + ${num2} = ${num1 + num2}`)
            break
        case '-':           
            console.log(`${num1} - ${num2} = ${num1 - num2}`)
            break
        case '*':
            console.log(`${num1} * ${num2} = ${num1 * num2}`)
            break
        case '/':
            console.log(`${num1} / ${num2} = ${num1 / num2}`)
            break
        default:
            console.log('Esta operação não é válida')
    }
}

calculadora(1,'+',2)
calculadora(5,'-',3)
calculadora(4,'*',6)
calculadora(9,'/',3)
calculadora(10,'%',4)