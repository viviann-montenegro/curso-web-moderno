//while -> enquanto (repetição) -> condição o inicio
function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Fim')

//do while -> faça enquanto -> condição no final, executa pelo menos uma vez
function getInteiroAleatorio2Entre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao2 = -1 //No do while não é necessário atribuir valor inicial para a variavel

do {
   opcao2 = getInteiroAleatorio2Entre(-1, 10)
   console.log(`Opção escolhida foi ${opcao2}.`) 
} while(opcao2 != -1) //Executa uma vez mesmo o valor inicial já sendo o falso

console.log('Fim')