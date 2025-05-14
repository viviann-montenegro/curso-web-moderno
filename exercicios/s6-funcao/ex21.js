/*
    Exercicio #21 - Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade 
    do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
    1) crianças com menos de 10 anos pagam R$80; 
    2) conveniados com idade entre 10 e 30 anos pagam R$50; 
    3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95;
    4) conveniados acima de 60 anos pagam R$130.
*/

function planoSaude(idade) {
    let valor = 100
    if (idade < 10) {
        valor += 80
    } else if (idade < 30) {
        valor += 50
    } else if (idade < 60) {
        valor += 95
    } else {
        valor += 130
    }

    console.log(`O valor a ser pago pelo plano de saúde para o conveniado de ${idade} anos é de R$ ${valor.toFixed(2).replace('.', ',')}`)
}

planoSaude(5)
planoSaude(45)
planoSaude(90)