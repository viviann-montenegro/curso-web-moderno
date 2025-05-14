/*
    Exercicio #1 - Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá 
    imprimir o resultado e o resto da divisão destes dois valores.
*/ 

function div(dividendo, divisor) {
    let result = dividendo / divisor
    let resto = dividendo % divisor
    console.log(`A divisão de ${dividendo} por ${divisor}, tem resultado ${result} e resto ${resto}`)
}

div(5,1)