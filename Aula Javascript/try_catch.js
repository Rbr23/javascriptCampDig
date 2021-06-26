
//TRY{} CATCH(){} -> É UTILIZADO EM LINGUAGENS DE PROGRAMAÇÃO PARA ENCONTRAR E TRATAR ERROS, NÃO PERMITINDO O TRAVAMENTO DO SISTEMA.



function imprimirNome(obj){

    try{
        console.log(obj.nome.toUpperCase() + "!!!")
    } catch(mensagemError){
       throw{
           nome: mensagemError.name,
           mensagem: mensagemError.message,
           data: new Date
       }
    } finally{
        console.log("ESTE BLOCO VAI SER EXECUTADO INDEPENDENTE DE QUALQUER COISA")
    }
   
}

obj = { name: "Roberto" }

imprimirNome(obj)



try{

}catch(e){

}