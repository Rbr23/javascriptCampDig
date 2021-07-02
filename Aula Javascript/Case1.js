

clientes = [

{cliente: "Cladio", codigo:8, preco:5.50, taxa:0.07}, 
{cliente: "Roberto", codigo:3, preco:3.50, taxa:0.08},
{cliente: "Marcos", codigo:80, preco:19.50, taxa:0.03},
{cliente: "Susie", codigo:25, preco:32,taxa:0.05},
{cliente: "Marta", codigo:98, preco:25, taxa:0.01},
{cliente: "Julia", codigo:43, preco:3, taxa:0.07}

]





    



function gerenciarLanchonete(obj){
    soma = null  
    imposto = null 
    for(let i = 0; i < obj.length; i++){
   
        if(obj[i].codigo == 8){

        soma = soma +  obj[i].preco
        imposto = imposto + (obj[i].preco * obj[i].taxa)
        console.log(obj[i].cliente, " gastou R$", obj[i].preco)

    } else if (obj[i].codigo == 3){

        soma = soma + obj[i].preco 
        imposto = imposto + (obj[i].preco * obj[i].taxa)
        console.log(obj[i].cliente, " gastou R$", obj[i].preco)

    }else if (obj[i].codigo == 80){

        soma += obj[i].preco
        imposto = imposto + (obj[i].preco * obj[i].taxa)
        console.log(obj[i].cliente, " gastou R$", obj[i].preco)

    }else if (obj[i].codigo == 25){

        soma += obj[i].preco
        imposto = imposto + (obj[i].preco * obj[i].taxa)
        console.log(obj[i].cliente, " gastou R$", obj[i].preco)

    }else if (obj[i].codigo == 98){

        soma += obj[i].preco
        imposto = imposto + (obj[i].preco * obj[i].taxa)
        console.log(obj[i].cliente, " gastou R$", obj[i].preco)

    }else if (obj[i].codigo == 43){

        soma += obj[i].preco
        imposto = imposto + (obj[i].preco * obj[i].taxa)
        console.log(obj[i].cliente, " gastou R$", obj[i].preco)

    }
}
lucro = soma - imposto
console.log("................................................")
console.log(`O valor total gerado foi de R$ ${soma}
o lucro de Sr José foi de R$ ${lucro} 
e o imposto pago é de ${imposto}`) 



}

gerenciarLanchonete(clientes)














