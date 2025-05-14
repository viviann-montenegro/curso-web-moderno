/*
    Exercicio #23 -  Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média 
    ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre 
    o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou 
    igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
*/

function avaliacao(cod, n1, n2, n3) {
    if (cod < 0){
        console.log('Código inválido')
    } else {
        let notas = [n1, n2, n3]
        notas.sort((a, b) => a - b)

        let media = (notas[0] * 3 + notas[1] * 3 + notas[2] * 4) / 10
        let aprovacao

        if(media >= 5) {
            aprovacao = 'APROVADO'
        } else {
            aprovacao = 'REPROVADO'
        }

        console.log(`O aluno de código ${cod} teve como notas: ${n1.toFixed(1)}, ${n2.toFixed(1)} e ${n3.toFixed(1)}. Sua média final é ${media.toFixed(1)} e ele está ${aprovacao}`)
    }
}

avaliacao(20,10,5,6)
avaliacao(22,5,5,6)
avaliacao(28,5,5,3)
avaliacao(-1,5,5,6)