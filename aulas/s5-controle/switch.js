//switch -> escolha (seleção múltipla)
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: //É possível usar a mesma sentença de código para dois cases desta forma
        case 9:
            console.log('Quadro de Honra')
            break //Para não executar os próximos cases é necessário utilizar 'break'
        case 8: case 7: //É possivel escrever os cases que usam o mesmo código seguidos na mesma linha
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida') //Não precisa de break pois é o ultimo código do switch, último 'case'
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)