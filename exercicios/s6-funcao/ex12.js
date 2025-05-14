/*
    Exercicio #12 - Faça um algoritmo que calcule o fatorial de um número.
*/

function fatorial(num) {
    let fat = num
    for (i = 1; i < num; i++) {
        fat = fat * (num-i)
    }
    console.log(`O fatorial de ${num} é ${fat}`)
}

fatorial(5)
fatorial(6)
fatorial(10)