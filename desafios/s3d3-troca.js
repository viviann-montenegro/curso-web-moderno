/*
    Desafio #3 - Troca de Valores
    Iniciando com as variáveis a = 7 e b = 94, troque o valor delas e imprima o resultado
*/

let a = 7;
let b = 94;

let temporaria;

temporaria = a;
a = b;
b = temporaria;

console.log("O valor de 'a' agora é: " + a + ", e o valor de 'b' agora é: " + b);