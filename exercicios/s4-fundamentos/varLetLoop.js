// for -> declaração da variável, condição de parada, incremento
for(var i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i =', i) //imprime i com valor 10 pois é var e tem escopo global, após sair do loop for

for(let j = 0; j < 10; j++) {
    console.log(j)
}
//console.log('j =', j) -> não imprime j pois é let e não está visivel fora do escopo do bloco, gera um erro

const funcs = []

for (var k = 0; k < 10; k++) {
    funcs.push(function() { //adiciona para cada iteração uma função anonima (sem nome) que imprime o valor de k na iteração
        console.log(k)
    })
}

funcs[2]() //imprime o valor 10 porque var não tem escopo de bloco, então não respeita o valor atribuido no laço
funcs[8]() //imprime o valor 10 porque var não tem escopo de bloco, então não respeita o valor atribuido no laço

const funcs2 = []

for (let l = 0; l < 10; l++) {
    funcs2.push(function() {
        console.log(l)
    })
}

funcs2[2]() //imprime o valor 2, let tem escopo de bloco e respeita o valor atribuido no laço
funcs2[8]() //imprime o valor 8, let tem escopo de bloco e respeita o valor atribuido no laço

//conceito de closure -> função em javascript é um closure e tem consciencia do local em que ela foi definida