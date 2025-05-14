//if -> se
function soBoaNoticia(nota) {
    if (nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeiroEuFalo(valor) {
    if(valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerdadeiroEuFalo()
seForVerdadeiroEuFalo(null)
seForVerdadeiroEuFalo(undefined)
seForVerdadeiroEuFalo(NaN)
seForVerdadeiroEuFalo('')
seForVerdadeiroEuFalo(0)
seForVerdadeiroEuFalo(-1)
seForVerdadeiroEuFalo(' ')
seForVerdadeiroEuFalo('?')
seForVerdadeiroEuFalo([])
seForVerdadeiroEuFalo([1, 2])
seForVerdadeiroEuFalo({})

function teste1(num) {
    if(num > 7) //O bloco com '{}' em if é opcional, mas sem bloco considera apenas uma sentença como parte do if
        console.log(num)
        console.log('Final') //Neste caso esta sentença fica fora do if, sempre aparece
}
//O ideal é usar chaves, não se valer de que é valido sem chaves para uma sentença

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { //O bloco if considera a sentença terminada em ';' como sua sentença associada
        console.log(num) //Neste caso esta sentença fica fora do if, sempre aparece
    }
}
//O ideal é não usar ';' em estruturas de controle

teste2(6)
teste2(8)

//if/else -> se/senão
const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') //imprime 'Reprovado' pois considera que 'Epa!' não é >= 7, tipagem fraca requer cuidado

//if/else/if -> se/senão/se (encadeamento de ifs)
Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultadoNota = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }
}

imprimirResultadoNota(10)
imprimirResultadoNota(8.9)
imprimirResultadoNota(6.55)
imprimirResultadoNota(2.3)
imprimirResultadoNota(-1)
imprimirResultadoNota(11)