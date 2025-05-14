/*
    Exercicio #34 - Construa uma função que receberá duas Strings de tamanhos variados e que retornará True 
    ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em 
    ambas palavras.
*/

function verificaCaracteresEm2Strings(primeiraString, segundaString) {
    let arrayPrimeiraString = primeiraString.toUpperCase().split('')
    let arraySegundaString = segundaString.toUpperCase().split('')


    let caracteresNaSegundaString
    for (let caractere in arrayPrimeiraString) {
        caracteresNaSegundaString = arraySegundaString.includes(arrayPrimeiraString[caractere])
        //console.log(arrayPrimeiraString[caractere],caracteresNaSegundaString)
    }

    let caracteresNaPrimeiraString
    for (let caractere in arraySegundaString) {
        caracteresNaPrimeiraString = arrayPrimeiraString.includes(arraySegundaString[caractere])
        //console.log(arraySegundaString[caractere],caracteresNaPrimeiraString)
    }

    if (caracteresNaPrimeiraString && caracteresNaSegundaString) {
        console.log(`Todos os caracteres das strings '${primeiraString}' e '${segundaString}' são iguais`)

    } else {
        console.log(`Há caracteres diferentes nas strings '${primeiraString}' e '${segundaString}'`)
    }
}

const string1 = 'medo'
const string2 = 'OMED'

verificaCaracteresEm2Strings(string1,string2)