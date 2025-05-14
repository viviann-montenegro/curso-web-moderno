/*
    Exercicio #27 -  Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais 
    de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior 
    e em quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

function comparaCrianca(alt1, taxa1, alt2, taxa2) {
    if (alt1 === alt2) {
        console.log(`As crianças possuem a mesma altura de ${alt1}cm`)
    } else {
        let maior, txMaior, menor, txMenor
        if (alt1 > alt2) {
            maior = alt1
            txMaior = taxa1
            menor = alt2
            txMenor = taxa2
        } else {
            maior = alt2
            txMaior = taxa2
            menor = alt1
            txMenor = taxa1
        }

        if(txMaior >= txMenor) {
            console.log(`A criança de ${menor}cm não ultrapassará a criança de ${maior}cm`)
        } else {
            let anos = 0
            let maiorini = maior
            let menorini = menor
            while (maior > menor) {
                maior = maior * (1 + txMaior / 100)
                menor = menor * (1 + txMenor / 100)
                anos++
            }
            console.log(`A criança menor de ${menorini}cm chegou a ${menor.toFixed(2)}cm e ultrapassou a criança maior de ${maiorini}cm que chegou a ${maior.toFixed(2)}cm em ${anos} anos`)
        }
    }
}

comparaCrianca(1.5,16,1.6,5)
comparaCrianca(1.5,10,1.5,8)
comparaCrianca(1.5,8,1.6,8)
comparaCrianca(1.5,8,1.6,10)