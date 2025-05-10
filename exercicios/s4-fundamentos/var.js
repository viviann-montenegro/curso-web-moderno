// var somente tem dois escopos possíveis, global -> visivel para qualquer ponto do programa ou 
// função -> visivel apenas dentro da função
// o perigo do escopo global é que ela pode ser substituída indevidamente

{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera) //imprime a variavel 'sera' pois pertence ao mesmo escopo (bloco generico)
            }
        }
    }
}

console.log(sera) //imprime a variavel 'sera' mesmo fora do escopo (bloco generico)

function teste() {
    var local = 123
    console.log(local) //imprime a variavel 'local' pois pertence ao mesmo escopo (bloco da função)
}

teste()

//console.log(local) -> não imprime a variável pois está fora do escopo (bloco da função) e ela é restrita ao escopo

var numero = 1
{
    var numero = 2
    console.log('dentro =', numero) //imprime a variavel com valor 2
}
console.log('fora =', numero) //imprime a variavel com valor 2, pois o escopo é global