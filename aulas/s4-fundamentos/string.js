//strings podem ser atribuídas utilizando aspas duplas (""), aspas simples ('') ou crases (``) -> template strings

const escola = "Cod3r"

console.log(escola.charAt(4)) //retorna 'r', caractere no índice 4, índices iniciam em 0
console.log(escola.charCodeAt(4)) //retorna o valor de 'r' em ASCII
console.log(escola.indexOf('r')) //retorna o índice do valor 'r' no string, no caso 4

console.log(escola.substring(1)) //retorna uma substring que inicia no indice informado e segue até o final -> 'od3r'
console.log(escola.substring(0, 3)) //retorna uma substring iniciada no primeiro indice informado e até o 
                                    //último indice informado, este não incluído -> 'Cod'

console.log('Escola '.concat(escola).concat('!')) //concatena strings, podem ser literais ou variáveis
concole.log('Escola ' + escola + "!") //outra forma de concatenar (.concat() ou +)

console.log(escola.replace(3, 'e')) //troca o caractere do indice informado pelo caracatere informado

console.log('Ana,Maria,Pedro'.split(',')) //gera um array separando o string conforme o separador indicado

console.log('3' + 2) //concatena o 3 e 2 -> 32, pois + faz sentido na string e elatem preferencia sobre o number

//Caso sejam comparados numeros em formato string, funciona de 0 a 9, porém para 10 em diante a comparação avalia
// o primeiro numero, gerando inconsistencias -> não é indicado
// ex '3' > '2' -> retorna true
// ex '20' > '3' -> retorna false pois compara '2' e '3'