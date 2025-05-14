let valor //não inicializada
console.log(valor) //demonstra o valor 'undefined', pois a variável nunca foi inicializada
//console.log(valor2) -> demonstra erro 'valor2 is not defined', pois a variável não existe

valor = null //ausência de valor, o valor da variável foi inicializada mas está 'vazia'
console.log(valor) //demonstra o valor 'null', variável aponta para um espaço vazio na memória

//não é correto informar 'undefined' para uma variável, para 'limpar' a variável utiliza-se 'null'

//console.log(valor.toString()) -> ocorre erro pois não poderia ser acessado um método/atributo por uma variável vazia

const produto = {}
console.log(produto.preco) //como o 'preco' não foi definido apresenta 'undefined', mas não apresenta erro pois produto foi definido
//console.log(produto.preco.a) -> gera um erro porque como o 'preco' não foi definido não pode acessar metodo/atributo dele  
console.log(produto) //imprime um objeto vazio

produto.preco = 3.50 //cria o atributo 'preco' com valor 3.50
console.log(produto) //imprime o objeto com o atributo preco e seu valor

produto.preco = undefined //não é correto realizar esta atribuição, prefira 'null'
console.log(!!produto.preco) //imprime 'false', valor booleano do 'preco' undefined
console.log(produto) //imprime o objeto com o atributo preco e valor undefined
delete produto.preco //deleta o atributo e não somente seu valor
console.log(produto) //imprime um objeto vazio

produto.preco = null //cria o atributo preco com valor nulo
console.log(!!produto.preco) //imprime 'false', valor booleano do 'preco' null
console.log(produto) //imprime o objeto com o atributo preco e valor null