const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //número com duas casas decimais
console.log(media.toString()) //número como string
console.log(media.toString(2)) //número como string em binário
console.log(typeof media)
console.log(typeof Number) // Number é uma função

console.log(7 / 0) //tende para o infinito, em javascript há o tipo infinity, então não da erro
console.log("10" / 2) //interpreta que "10" é um número e realiza a divisão corretamente
console.log("Show!" * 2) //verifica que "Show!" não é um número e apresenta NaN (Not a Number)
console.log(0.1 + 0.7) //apresenta imprecisão por uma especificação sobre pontos flutuantes

console.log((10.29).toFixed(1)) //pode-se aplicar uma função em um valor literal se estiver entre parênteses