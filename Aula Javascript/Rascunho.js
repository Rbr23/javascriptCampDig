

//classe pai
class animal{
    #tamanho
    #peso
    #idade
    constructor(tamanho, peso, idade){
        this.#tamanho = tamanho
        this.#peso = peso
        this.#idade = idade
    }

    get tamanho(){
        return this.#tamanho
    }

    set tamanho(valor){
        this.#tamanho = valor
    }

    get peso(){
        return this.#peso
    }

    set peso(valor){
        this.#peso = valor
    }

    get idade(){
        return this.#idade
    }

    set idade(valor){
        this.#idade = valor
    }

    fazerBarulho(){
        console.log("Fazendo barulho!")
    }

    comer(){
        console.log("Comendo!")
    }

    dormir(){
        console.log("Dormindo!")
    }
}



//classe filho
class felino extends animal{
    #nome
    constructor(nome, tamanho, peso, idade ){
        super(tamanho, peso, idade)
        this.#nome = nome
    }

    get nome(){
        return this.#nome
    }
    
    set nome(valor){
        this.#nome = valor
    }

    fazerBarulho(){
        console.log("Comece a miar!")
    }

    vagar(){
        console.log("Estou vagando!")
    }
}

//classe filho
class canino extends animal{
    #nome
    constructor(nome, tamanho, peso, idade){
        super(tamanho, peso, idade)
        this.#nome = nome
    }
    
    get nome(){
        return this.#nome
    }

    set nome(valor){
        this.#nome = valor
    }

    fazerBarulho(){
        console.log("Comece a latir!")
    }

    vagar(){
        console.log("Estou vagando!")
    }
}


const leao = new felino("rei da floresta", 1.30, 200, 30)

console.log(leao.fazerBarulho())



