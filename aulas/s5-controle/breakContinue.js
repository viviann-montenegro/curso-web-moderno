//break e continue realizam desvio de fluxo dentro de blocos for/while/do-while/switch (não atua sobre if)
//break -> interrompe o laço e sai do bloco
//continue -> interrompe a iteração atual e vai para a próxima

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5) { //break não age em if, agirá no bloco for/while/switch mais próximo
        break //para o for em x = 5, para as iterações em '4 = 5'
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log('Fim')

for (let y in nums) {
    if (y == 5) {
        continue //não exibe quando y = 5, no caso pula '5 = 6' e segue para '6 = 7'
    }
    console.log(`${y} = ${nums[y]}`)
}

console.log('Fim')

externo: //rótulo do laço
for (let a in nums) {
    for (let b in nums) {
        if (a == 2 && b == 3) break externo //neste caso o break consegue para o laço mais distante, pelo rótulo
        console.log(`Par = ${a},${b}`)
    }
}
//não é indicado usar pois fica desestruturado e mal organizado, atrapalhando o entendimento e a manutenção (go to alike)

console.log('Fim')