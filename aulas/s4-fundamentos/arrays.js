const valores = [7.7, 8.9, 6.3, 9.2] //o array é declarado com [] e os elementos são separados utilizando a virgula (,)
// obs o array é dinamico, pode ter elementos incluidos e removidos após sua declaração

console.log(valores[0], valores[3]) //imprime os elementos dos indices indicados -> o array inicia em indice 0

valores[4] = 10 //adiciona o elemento atribuido ao indice indicado (caso hajam espaços entre o atual e o indicado serão vazios)
console.log(valores) //imprime o array
console.log(valores.length) // '.length' indica a quantidade de elementos do array

valores.push({id: 3}, false, null, 'teste') //'.push' inclui elementos no final do array
// obs.: o array permite tipos diferentes mas não é indicado

console.log(valores.pop()) //'.pop' remove o ultimo elemento do array
delete valores[0] //'delete' remove o elemento do indice indicado do array

console.log(typeof valores) //array é do tipo 'object'
