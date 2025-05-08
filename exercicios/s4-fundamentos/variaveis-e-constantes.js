var a = 3
let b = 4

console.log(a, b)

var a = 30 // var permite a redeclaração sem problemas, let não
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5 // const não permite alteração na atribuição de valores

console.log(c)