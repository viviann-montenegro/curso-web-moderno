/*
    Exercicio #5 - Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece 
    quando faz o seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. 
    Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. 
    Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva 
    uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 
    (observe a vírgula e o ponto).
*/ 

function converteDinheiro(valor) {
    let valorFormatado = valor.toFixed(2).replace('.', ',')
    console.log(valorFormatado)
}

converteDinheiro(0.1 + 0.2)