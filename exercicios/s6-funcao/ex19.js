/*
    Exercicio #19 - O cardápio de uma lanchonete é o seguinte:
    Código  Descrição do Produto    Preço
    100     Cachorro Quente         R$ 3,00
    200     Hambúrguer Simples      R$ 4,00
    300     Cheeseburguer           R$ 5,50
    400     Bauru                   R$ 7,50
    500     Refrigerante            R$ 3,50
    600     Suco                    R$ 2,80
    Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
    a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
    comando switch. Crie um caso default para produto não existente.
*/

function compraLanche(cod, qtd) {
    let preco
    switch (cod) {
        case 100:
            preco = qtd * 3
            console.log(`Sua compra de ${qtd} Cachorro(s) Quente(s) ficou no valor de R$ ${preco.toFixed(2).replace('.', ',')}`)
            break
        case 200:
            preco = qtd * 4
            console.log(`Sua compra de ${qtd} Hambúrguer(s) Simples ficou no valor de R$ ${preco.toFixed(2).replace('.', ',')}`)
            break
        case 300:
            preco = qtd * 5.5
            console.log(`Sua compra de ${qtd} Cheeseburguer(s) ficou no valor de R$ ${preco.toFixed(2).replace('.', ',')}`)
            break
        case 400:
            preco = qtd * 7.5
            console.log(`Sua compra de ${qtd} Bauru(s) ficou no valor de R$ ${preco.toFixed(2).replace('.', ',')}`)
            break
        case 500:
            preco = qtd * 3.5
            console.log(`Sua compra de ${qtd} Refrigerante(s) ficou no valor de R$ ${preco.toFixed(2).replace('.', ',')}`)
            break
        case 600:
            preco = qtd * 2.8
            console.log(`Sua compra de ${qtd} Suco(s) ficou no valor de R$ ${preco.toFixed(2).replace('.', ',')}`)
            break
        default:
            console.log('Este produto não existe')
    }
}
compraLanche(100,5)
compraLanche(400,3)
compraLanche(200,2)
compraLanche(600,1)
compraLanche(900,2)