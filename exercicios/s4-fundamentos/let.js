// let tem escopo global, escopo de função e escopo de bloco -> visivel apenas dentro do bloco, mesmo não sendo função

var numero = 1
{
    let numero = 2
    console.log('dentro =', numero) //imprime o valor 2, pois let tem escopo restrito ao bloco e o escopo menor tem preferencia
}
console.log('fora =', numero) //imprime o valor 1
