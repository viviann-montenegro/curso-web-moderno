let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //dupla negação para interpretar o valor number como boolean, no caso 1 é true

console.log('os verdadeiros:')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
//são considerados verdadeiros os valores numéricos diferentes de 0, strings não vazias (espaço ou texto), arrays
//(mesmo que vazios), objetos, infinity ou ainda atribuições que resultem em verdadeiro

console.log('os falsos:')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
//são considerados falsos o valor 0, strings vazias, null, NaN (Not a Number), undefined e atribuições que resultem
//em verdadeiro

let nome = ''
console.log(nome || 'Desconhecido') //imprime 'Desconhecido' caso a variável nome esteja vazia, isto é, seja falsa