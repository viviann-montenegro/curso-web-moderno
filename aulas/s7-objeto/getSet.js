const sequencia = {
    _valor: 1, //variavel iniciada com _ é, por convenção, privada
    get valor() {return this._valor++},
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 //não altera o valor por causa da condicional interna do metodo set
console.log(sequencia.valor, sequencia.valor)