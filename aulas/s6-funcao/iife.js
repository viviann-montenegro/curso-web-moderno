//iife -> immediatey invoked function expression (função imediatamente invocada)

(function() {
    console.log('Será executada na hora')
    console.log('Foge do escopo mais abrangente -> global')
})()

//é semelhante às sentenças diretamente no arquivo, porém com a vantagem da limitação ao escopo da função