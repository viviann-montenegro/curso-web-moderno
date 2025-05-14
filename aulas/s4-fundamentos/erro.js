function tratarErroELancar(erro) {
    throw new Error('Ocorreu um erro') //lança algo quando um erro é capturado e é chamada a função
    //pode ser lançado um erro, um numero, uma string, um boolean, um objeto
}


function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) { //captura erros caso aconteção e executa o indicado
        tratarErroELancar(e)
    } finally { //executa após try ou catch, sempre executa
        console.log('final')
    }
}

const obj = {nome: 'Roberto'} //criação de um erro 'nome' ao invés de 'name'
imprimirNomeGritado(obj)