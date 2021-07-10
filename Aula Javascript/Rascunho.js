



/*

  POO

  .ABSTRAÇÃO: 


  CARRO: 
  marca (características - atributo)
  modelo (características - atributo)
  ano (características - atributo)

  ligar (comportamento - método)

  desligar (comportamento - método)

  .ENCAPSULAMENTO:

*/

/*
const FOX = {
    _marca: "FORD",
    _modelo: "KA",
    _ano: 2009,

    get marca(){
        return this._marca
    },

    set marca(valor){
        this._marca = valor
    },
    

    ligar:function(desligar){
        if(desligar > 0){
            console.log("Carro está ligado")
    }
    },

    desligar:function(){
        console.log("Carro está desligado!")
    }

}




const BMW = {
    _marca: "BMW",
    _modelo: "X9",
    _ano: 2020,

    get marca(){
        return this._marca
    },

    set marca(valor){
        this._marca = valor
    },
    

    ligar:function(desligar){
        if(desligar > 0){
            console.log("Carro está ligado")
    }
    },

    desligar:function(){
        console.log("Carro está desligado!")
    }

}


*/



class carro{
    #marca
    #modelo
    #ano
    constructor(marca, modelo, ano){
        this.#marca = marca
        this.#modelo = modelo
        this.#ano = ano
    }

    get marca(){
        return this.#marca
    }

    set marca(valor){
        this.#marca = valor
    }

    get modelo(){
        return this.#modelo
    }

    set modelo(valor){
        this.#modelo = valor
    }
    

}


const fox = new carro("Volkswagen", "Fox", 2009)

const fusca = new carro("Volkswagen", "fusca", 1990)

const bmw = new carro("BMW", "X9", 2020)


console.log(fox.modelo)




class pessoa{
    #nome
    #idade
    #profissao
    #bipede
    #condicaoFisica
    constructor(nome, idade, profissao, condicaoFisica){
        this.#nome = nome
        this.#idade = idade
        this.#profissao = profissao
        this.bipede = true
        this.#condicaoFisica = condicaoFisica
    }

    get nome(){
        return this.#nome
    }

    set nome(valor){
        this.#nome = valor
    }

    get idade(){
        return this.#idade
    }


}



const roberto = new pessoa("Robyrto", 29, "Professor")

const ligia = new pessoa("ligia", 29, "Coordenadora")

const susie = new pessoa("Susie", 29, "Monitora")

console.log(roberto.nome = "Roberto")




function imprimirNome(nome){
    console.log(nome)
}

imprimirNome("Roberto")




function teste(){
    this.nome = 12

}



