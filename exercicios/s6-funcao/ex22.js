/*
    Exercicio #22 - Criar uma função para calcular o valor a ser pago de anuidade de uma associação. 
    A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga 
    e o valor da anuidade. A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o 
    regime de juros compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
*/

function anuidade(mes, valor) {
    if ((mes < 1) || (mes > 12)) {
        console.log('Mês inválido')
    } else if (mes === 1) {
        console.log(`Anuidade paga no mês de vencimento no valor de R$ ${valor.toFixed(2).replace('.',',')}`)
    } else {
        valor = valor * Math.pow((1 + (5 / 100)), (mes - 1))
        console.log(`Anuidade paga com ${mes - 1} mes(es) de atraso no valor de R$ ${valor.toFixed(2).replace('.',',')}`)
    }
}

anuidade(1,1000)
anuidade(2,1000)