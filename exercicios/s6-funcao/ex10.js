/*
    Exercicio #10 - Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 
    3 e retorne true ou false.
*/

function div3(valor) {
    let mod = valor % 3
    if (mod === 0) {
        return true
    } else {
        return false
    }
}

console.log(div3(27))
console.log(div3(25))