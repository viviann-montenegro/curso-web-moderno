/*
    Exercicio #6 - Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo 
    de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples 
    e a segunda retornará o valor da aplicação sob o regime de juros compostos.
*/ 

function jurosSimples(capitalIni, taxa, tempo) {
    let montante = capitalIni + (capitalIni * taxa / 100 * tempo)
    console.log(`O montante da aplicação de R$ ${capitalIni.toFixed(2).replace('.',',')} à taxa de ${taxa}% durante ${tempo} meses, no regime de juros simples, é R$ ${montante.toFixed(2).replace('.',',')}`)
}

function jurosCompostos(capitalIni, taxa, tempo) {
    let montante = capitalIni * Math.pow((1 + (taxa / 100)), tempo)
    console.log(`O montante da aplicação de R$ ${capitalIni.toFixed(2).replace('.',',')} à taxa de ${taxa}% durante ${tempo} meses, no regime de juros compostos, é R$ ${montante.toFixed(2).replace('.',',')}`)
}

jurosSimples(1000,5,12)
jurosCompostos(1000,5,12)