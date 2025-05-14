/*
    Exercicio #40 - Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada 
    uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 
    7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.
*/

function mostraConceitoDasNotas(notas) {
    let conceitoNotas = []
    for (let nota in notas) {
        if ((notas[nota] >= 0.0) && (notas[nota] <= 4.9)) {
            conceitoNotas.push('D')
        } else if ((notas[nota] >= 5.0) && (notas[nota] <= 6.9)) {
            conceitoNotas.push('C')
        } else if ((notas[nota] >= 7.0) && (notas[nota] <= 8.9)) {
            conceitoNotas.push('B')
        } else if ((notas[nota] >= 9.0) && (notas[nota] <= 10.0)) {
            conceitoNotas.push('A')
        }
    }
    console.log(`Os conceitos das notas ${notas} são respectivamente ${conceitoNotas}`)
}

mostraConceitoDasNotas([1.1,5.6,8.9,9.8])