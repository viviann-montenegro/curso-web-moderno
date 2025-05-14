/*
    Exercicio #3 - Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada 
    ao expoente.
*/ 

function potenciacao(base, exp) {
    let pot = Math.pow(base, exp)
    console.log(`O valor de ${base} elevado ao expoente ${exp} é ${pot}`)
}

potenciacao(5,2)