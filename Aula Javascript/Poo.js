
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


//const carro = {preco: 10000, marca: "Ford", modelo: "KA", ligar: function(gasolina){ if(gasolina >0 ){return true}}, desligar: function(){}}


//carro.preco = "20000"
//carro.marca = "Fiat"
//carro.modelo = "UNO"







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

console.log("-----------------------------------------ENCAPSULAMENTO----------------------------------------------")

//ENCAPSULAMENTO É A NECESSIDADE QUE TEMOS DE CRIAR UMA CAMADA MAIOR DE SEGURANÇA PARA O ACESSO AOS ATRIBUTOS DO OBJETO

//GETTERS E SETTERS


//Método get acessa o valor do atributo

//Método set modifica o valor do atributo

var carro = {
    _preco: 10000, 

    get preco(){
        return this._preco
    },

    set preco(valor){
        this._preco = valor
    },


    _marca: "Ford", 

    get marca(){
        return this._marca
    },

    set marca(valor){
        this._marca = valor
    },



    _modelo: "KA"




}

console.log(carro.preco = 30)


const pessoa = {
    _nome:"Roberto",
    _sobrenome:"Batista",

    get nomeCompleto(){
        return `${pessoa._nome} ${pessoa._sobrenome}`
    },

    set nomeCompleto(valor){
        const partes = valor.split(" ")
        this._nome = partes[0],
        this._sobrenome = partes[1]
    }


}


console.log(pessoa.nomeCompleto = "Marcos Ribeiro")


console.log("-----------------------------------------HERANÇA----------------------------------------------")

//Classe, em poo, é utilizada para representar atributos e métodos dos objetos

//classe pai 
class mamifero{
    constructor(especie, nome, idade){
        this.especie = especie
        this.nome = nome
        this.idade = idade
        this.glandulasMamarias = true
        this.pelo = true
    }

}

class humano extends mamifero{
    constructor(especie, nome, idade, profissao){
        super(especie, nome, idade)
        this.profissao = profissao
        this.bipede = true
    }

}

class felino extends mamifero{
    constructor(especie, nome, idade){
        super(especie, nome, idade)
        this.calda = true
        this.quadrupede = true
    }
}

var Roberto = new humano("homo sapiens", "Roberto", 29, "professor")
var Luciana = new humano("homo sapiens", "Luciana", 29, "professora")

var funcionarioCampinho = new humano("homo sapiens", "Susie", 29, "monitora")

var leao = new felino("felino", "Zeca", 4)

var leopardo = new felino("felino", "babu", 3)

console.log(funcionarioCampinho)

console.log(leao)


function contra(a){
    if(typeof(a) == "number"){
        return (a - (2 * a))
    }
}

console.log(contra(35))








