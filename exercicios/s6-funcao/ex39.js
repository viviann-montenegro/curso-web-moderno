/*
    Exercicio #39 - Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo 
    que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim 
    sucessivamente. Faça a troca sem utilizar uma variável auxiliar.
*/

function trocaVetores(vetorA, vetorB) {
    console.log(`Inicialmente este é o vetor A: ${vetorA} e este é o vetor B: ${vetorB}`)
    for (let valor in vetorA) {
        vetorB.push(vetorA[valor])
        vetorA[valor] = vetorB[valor]
        vetorB[valor] = vetorB[vetorB.length - 1]
        vetorB.pop(vetorB[vetorB.length])
    }
    console.log(`Agora este é o novo vetor A: ${vetorA} e este é o novo vetor B: ${vetorB}`)
}

const vetorA = [1,2,3,4,5]
const vetorB = [21,22,23,24,25]

trocaVetores(vetorA,vetorB)