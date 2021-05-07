
//Objeto é uma coleção de chave-valor (elementos).
//a atribuição da chave é o que caracteriza um objeto
// um objeto pode estar dentro de outro objeto, como se fosse um elemento
//notação ponto serve para quando queremos acessar especificamente um elemento dentro do objeto

var conjunto = {
    nome: 'Roberto',
    endereco: 'Leme',
    salario: 200,
    profissao: 'data scientist',
    empregado: true,
    filhos: {
             filho1 : 'Aline',
             filho2 : 'Maria',
             filho3 : 'Dulce',
             filho4 : 'Arthur'
    }
}

//console.log(conjunto.nome)
//console.log(conjunto.endereco)
//console.log(conjunto.salario)
//console.log(conjunto.profissao)
//console.log(conjunto.filhos)
//console.log(conjunto.empregado)

console.log(conjunto)
