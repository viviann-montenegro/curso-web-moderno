/*
    Exercicio #24 - Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de 
    repetição while.
*/

function helloWorld11() {
    let contador = 0
    while(contador < 11) {
        console.log(`${contador+1}: Hello World`)
        contador++
    }
}

helloWorld11()