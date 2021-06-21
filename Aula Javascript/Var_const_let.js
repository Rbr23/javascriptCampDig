
//Em javascript, podemos fazer declarações de variáveis com as palavras reservadas VAR / CONST / LET

//var é utilizado para declarar variáveis e ela pode ser sobrescrita

//const é utilizado para declarar variáveis que não podem ter seu valor sobrescrito. EX: PRECISO CRIAR UMA VARIÁVEL QUE NÃO TENHA SEU VALOR MODIFICADO. 

//var nome = 'Roberto'

//nome = 'MARIA'

//nome = 'RODOLFO'

//console.log(nome)

//var numeroA = 23

//numeroA = 34

//console.log(numeroA)



//const numeroB = 24

//numeroB = 56

//console.log(numeroB)


//const funcionario = 'MARCOS'

//funcionario = 'CAROL'

//console.log(funcionario)


//var professor = 'Roberto'

//professor = 'Rodolfo' 


//const professora = 'Luciana'

//professora = 'Beth'



console.log("----------------------------------Aula do dia 24.06.21----------------------------------------------")

//Variável é uma referência a um espaço de memória do computador que utilizamos para guardar informações. Seu acesso é dado através de um identificador. 

var nome = "Roberto"

//Variável tem esse nome, porque pode variar de acordo com a execução do código
//Em javascript, variável é sensitive case. 

var NOME1 = "Rogério"

var nome1 = "Mauricio"

//Na criação de variável, não é permitido espaços, acentuação e números são permitidos, desde que sejam precedidos por letras. 
//Em javascript, adotamos o padrão camelCase. Por exemplo:

var numero = 6

var numeroTrabalhadores = 12


// ESCOPO DE VARIÁVEL 

//ESCOPO GLOBAL É QUANDO A VARIÁVEL FICA DISPONÍVEL EM QUALQUER ÁREA DO CÓDIGO, PARA SEU ACESSO. 

//ESCOPO LOCAL É QUANDO A VARIÁVEL FICA RESTRITA APENAS A UMA ÁREA DO CÓDIGO, TENDO SEU ACESSO RESTRINGIDO A UMA PARTE ESPECÍFICA.




//DECLARAÇÃO COM VAR -> DECLARAÇÃO DE VARIÁVEIS 

var aluno = "Arthur"

//DECLARAÇÃO COM CONST -> DECLARAÇÃO DE VARIÁVEIS QUE NÃO PODEM SER SOBRESCRITA

const colegio = "E.E"

//DECLARAÇÃO COM LET -> DECLARAÇÃO DE VARIÁVEL EM QUE A VARIÁVEL RESPEITA ESCOPO DE BLOCO

let estudante = "Carol"






function teste(){



    //variáveis criadas dentro de funções tem seu acesso local restrito às funções
    var numeroProfessores = 8

    
}




if(true){
    let funcionarioBanco = "Otavio"
}

for(i = 0; i < 10; i++){

}


{

    let escola = "E.M"

}

console.log(escola)


//escopo global = var, const, let

//escopo de função -> escopo local = var, const, let

//escopo de bloco -> escopo local = let, const