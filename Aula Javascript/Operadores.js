
//---------------------------------------------------OPERADORES ARITMÉTICOS----------------------------------------------------------

var a = 10
var b = 20

//SOMA
console.log('Soma de a + b é igual a: ', a + b)

//SUBTRAÇÃO
console.log('A subtração de a - b é igual a: ', a - b)

//MULTIPLICAÇÃO
console.log('A multiplicação de a * b é igual a: ', a * b)

//DIVISÃO
console.log('A divisão de a / b é igual a: ', a / b)

//MÓDULO => descobrir o resto de uma divisão
console.log('O módulo é usado pelo sinal de %. O resto da divisão dá: ', b % a)


var resultado = 45 / 3
resultado = 50 + 40
resultado = 7 % 2
//console.log(resultado)


//------------------------------------------OPERADORES RELACIONAIS---------------------------------------------------------------------

a = 3
b = 4
c = 3

//SINAL DE IGUALDADE ENTRE VALORES É FEITO ATRAVÉS DO OPERADOR:   ==
console.log('SINAL DE IGUAL: ', a == c) //IGUALDADE RETORNA VERDADEIRO
console.log('SINAL DE IGUAL: ', a == b) // Ñ IGUALDADE RETORNA FALSO


//SINAL DE DIFERENÇA ENTRE VALORES É FEITO ATRAVÉS DO OPERADOR:   !=
console.log('SINAL DE DIFERENÇA: ', a != c) //DIFERENÇA RETORNA VERDADEIRO
console.log('SINAL DE DIFERENÇA: ', a != b) //IGUALDADE RETORNA FALSO

//SINAL DE IDÊNTICO ENTRE VALORES E TIPOS É FEITO ATRAVÉS DO OPERADOR:   ===
//ESSE SINAL É UTILIZADO QUANDO QUEREMOS DIZER QUE EXISTE IGUALDADE NOS VALORES E NOS TIPOS DAS 2 VARIÁVEIS
console.log('SINAL DE IDÊNTICO: ', a === c) //IDENTICO RETORNA VERDADEIRO
console.log('SINAL DE IDÊNTICO: ', a === b) //NÃO IDÊNTICO RETORNA FALSO

//SINAL DE NÃO IDÊNTICO ENTRE VALORES E TIPOS É FEITO ATRAVÉS DO OPERADOR:   !==
console.log('SINAL DE NÃO IDÊNTICO: ', a !== c) //IDÊNTICO RETORNA FALSO
console.log('SINAL DE NÃO IDÊNTICO: ', a !== b) //NÃO IDÊNTICO RETORNA VERDADEIRO

//SINAL DE 'MAIOR QUE'
console.log('Maior que: ', 9 > 4)

//SINAL DE 'MENOR QUE'
console.log('Menor que: ', 2 < 4 )

//SINAL DE 'MAIOR OU IGUAL QUE'
console.log('Maior ou igual que: ', 8 >= 8)

//SINAL DE 'MENOR OU IGUAL QUE'
console.log('Menor ou igual que: ', 10 <= 8)


//-----------------------------------------------OPERADORES LÓGICOS OU OPERADORES BINÁRIOS------------------------------------------------

/*

TABELA VERDADE

operador (e) == &&

V and V = V
V and F = F
F and V = F
F and F = F
--------------------------------------

operador (ou) == ||
V or V = V
V or F = V
F or V = V
F or F = F

*/



var variavelVerdadeira = true
var variavelFalso = false

//-------------------------------------------AND------------------------------------------------
console.log('-------------------------------AND-----------------------------------------------------')

console.log( 'OPERADOR LÓGICO: V and V = V', variavelVerdadeira && variavelVerdadeira)
console.log( 'OPERADOR LÓGICO: V and F = F', variavelVerdadeira && variavelFalso)
console.log( 'OPERADOR LÓGICO: F and V = F', variavelFalso && variavelVerdadeira)
console.log( 'OPERADOR LÓGICO: F and F = F', variavelFalso && variavelFalso)

//-------------------------------OR-----------------------------------------------------
console.log('-------------------------------OR-----------------------------------------------------')

console.log( 'OPERADOR LÓGICO: V or V = V', variavelVerdadeira || variavelVerdadeira)
console.log( 'OPERADOR LÓGICO: V or F = V', variavelVerdadeira || variavelFalso)
console.log( 'OPERADOR LÓGICO: F or V = V', variavelFalso || variavelVerdadeira)
console.log( 'OPERADOR LÓGICO: F or F = F', variavelFalso || variavelFalso)



var condicaoA = 8 > 5 //armazenando o valor de verdadeiro



var condicaoB = 3 < 1 //armazenando o valor de falso

console.log('condicaoA e condicaoB', condicaoA && !condicaoB)


//--------------------------------------------------QUINTA------------------------------------------------------

//Negação é simplesmente a alteração do valor de verdadeiro para falso ou de falso para verdadeiro
console.log('-----------------------------------------QUINTA-------------------------------------------')

console.log('Transformando verdadeiro em falso: ', !true)
console.log('Transformando falso em verdadeiro: ', !false)



