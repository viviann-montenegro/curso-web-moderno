//contexto léxico -> local da declaração
const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() //retorna 'Global' porque a função carrega em si seu contexto léxico independente do contexto de execução

//closure -> escopo criado quando a função é declarada que permite acessar e manipular variáveis externas à função

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() { //o closure de 'dentro' é o escopo da função 'fora'
        return x
    }
    return dentro
}

const minhaFuncao2 = fora()
console.log(minhaFuncao2()) //retorna 'Local' pois a função acessa a variável do seu contexto léxico (declaração)