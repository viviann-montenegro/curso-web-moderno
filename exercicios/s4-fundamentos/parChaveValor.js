//par chave(nome)/valor
const saudacao = 'Opa' //contexto léxico global

function exec() {
    const saudacao = 'Fala' //contexto léxico da função
    return saudacao
}

//objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Pedro', //contexto léxico do objeto cliente
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal', //contexto léxico do objeto endereco
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)