//var-> global indepede
//const -> constante
//let -> var pelo escolpe
var a = "a";

console.log("hello word");

//tipagem
a : String = "s";

//mostra o tipo da ver
console.log(typeof a);


console.clear();


// -> if (){console.log(...)} else {console.log(...)}
let r = (idade >= 18) ? "Maior" : "Menor";



//dicionario/objeto
{

}

//array
let b = ["1",2, true];
//retonar o tamnho da lista
console.log(b.length);

//for em uma liosta para pegar os elemnto
for (let i of b){
    console.log(i);
}
//for em um objeto
for (let i in Object){
    console.log(i);
}

function HelloWord(){
    //operadres
    /*
        = -> atribuição
        == -> comparação(só o valor)
        === -> extritamente igual(valor e tipo igual)
        != -> diferente(só o valor)
        !== -> extritamente diferente (valor e tipo igual)

        and -> &&
        or -> ||

        + - / * % **
    */
    
    if (a === "b"){
        console.log("heelo word");
    }else if (a === "a"){
        console.log("heelo a");
    }else{
        console.log("heelo? ");
    }

    let altura = 7;

   for (let i = 1; i <= altura; i++){
            let espacos = " ".repeat(altura - i);
            let asteriscos = "*".repeat(2 * i - 1);
            
            console.log(espacos+asteriscos);
        }

}



HelloWord();

//lambada no js
() => {}