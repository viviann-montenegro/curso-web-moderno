/*
    Exercicio #7 - Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar.
    Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve 
    receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam 
    respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível
    resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, 
    um string com a frase: “Delta é negativo”.
*/ 

function bhaskara(a, b, c) {
    let sinalB = b > 0 ? '+' : '-'
    let sinalC = c > 0 ? '+' : '-'

    let delta = Math.pow(b,2) - (4 * a * c)
    if (delta < 0) {
        console.log('Delta é negativo, não existem raízes reais')
    } else {
        let raiz = []
        raiz[0] = (-b + Math.sqrt(delta)) / (2 * a)
        raiz[1] = (-b - Math.sqrt(delta)) / (2 * a)
        console.log(`As raízes da equação ${a}x² ${sinalB} ${b > 0 ? b : -b}x ${sinalC} ${c > 0 ? c : -c} = 0 são ${raiz[0]} e ${raiz[1]}`)
    }
}

bhaskara(3,-5,12)
bhaskara(1,2,-3)
bhaskara(1,-5,6)