/*
    Exercicio #8 - Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, 
    ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor 
    e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = 
    “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores 
    um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos 
    e quando fez seu pior jogo. (Número do pior jogo).
    Obs.: O primeiro jogo não conta como novo recorde do melhor.
    Exemplo:
    String: “10 20 20 8 25 3 0 30 1”
    Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
    aconteceu no sétimo jogo.)
*/ 

function analiseJogo(pontuacoes) {
    let arrayPontuacoes = pontuacoes.split(' ')

    let maiorPonto = Number(arrayPontuacoes[0])
    let menorPonto = Number(arrayPontuacoes[0])

    let resultado = [0,1]

    for (let i = 0; i < arrayPontuacoes.length; i++) {
        if(Number(arrayPontuacoes[i]) > maiorPonto) {
            maiorPonto = Number(arrayPontuacoes[i])
            resultado[0]++
        } else if (Number(arrayPontuacoes[i] < menorPonto)) {
            menorPonto = Number(arrayPontuacoes[i])
            resultado[1] = i + 1
        }
    }

    console.log(`O jogador bateu seu recorde de melhor pontuação ${resultado[0]} vezes e teve sua pior pontuação no jogo de número ${resultado[1]}`)
}

analiseJogo('10 20 20 8 25 3 0 30 1')
analiseJogo('2 4 5 15 10 18 25 20 20 8 25 30 2 39 1')
analiseJogo('1 2 3')
