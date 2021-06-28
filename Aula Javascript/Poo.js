
/*

MODELO BASEADO EM LINGUAGEM ESTRUTURADA OU PROCEDURAL

function pegarNome(){



}


function conferirNome(){



}


function imprimirNome(){


}


1- pegarNome()

2- conferirNome()

3- pegarNome()

4- conferirNome()

5- imprimirNome()



*/


//PROGRAMAÇÃO ORIENTADA A OBJETOS

//CRIAÇÃO DE OBJETOS QUE FUNCIONAM COMO ENTIDADES QUE TÊM CARACTERÍSTICAS E COMPORTAMENTOS PRÓPRIO


const carro = {preco: 10000, marca: "Ford", modelo: "KA", ligar: function(gasolina){ if(gasolina >0 ){return true}}, desligar: function(){}}


carro.preco = "20000"
carro.marca = "Fiat"
carro.modelo = "UNO"







/*

.ABSTRAÇÃO (É CAPACIDADE DE OLHAR PARA A VIDA REAL E MAPEAR CARACTERÍSTICAS E COMPORTAMENTOS DE ENTIDADES EXISTENTES)

Exemplo: CARRO (entidade)
         preço (característica - atributo)
         marca (característica - atributo)
         modelo (característica - atributo)
         ligar (comportamento - método)
         desligar (comportamento - método)


.ENCAPSULAMENTO (CAPACIDADE DE ENCAPSULAR OS ATRIBUTOS DE CADA OBJETO, DE MANEIRA A DAR MAIS SEGURANÇA)

.HERANÇA

.POLIMORFISMO


*/
