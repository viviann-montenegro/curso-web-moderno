/*
    Exercicio #37 - Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que 
    recebam como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n 
    termos, bem como a soma dos elementos.
*/

function progressaoAritmetica(numeroTermos, primeiroTermo, razao) {
    let soma = primeiroTermo
    let termoAtual = primeiroTermo
    let termos = [termoAtual]
    for (let i = 1; i < numeroTermos; i++) {
        termoAtual += razao
        termos.push(termoAtual)
        soma += termoAtual
    }
    console.log(`Os ${numeroTermos} termos da progressão aritmética de razão ${razao} são ${termos}. A Soma dos termos é ${soma}.`)
}

function progressaoGeometrica(numeroTermos, primeiroTermo, razao) {
    let soma = primeiroTermo
    let termoAtual = primeiroTermo
    let termos = [termoAtual]
    for (let i = 1; i < numeroTermos; i ++) {
        termoAtual *= razao
        termos.push(termoAtual)
        soma += termoAtual
    }
    console.log(`Os ${numeroTermos} termos da progressão geométrica de razão ${razao} são ${termos}. A Soma dos termos é ${soma}.`)
}

progressaoAritmetica(10,1,5)
progressaoGeometrica(10,1,2)