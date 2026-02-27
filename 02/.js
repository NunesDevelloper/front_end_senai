/*random 
Math.floor ->  elimina a as casa decimal 
Math.random() -> gera um numero float entre 0 e 1
*/
console.log(Math.floor(Math.random() * 10)+1)

//while
const contion = false;
while (contion) {
    //break
    //continue
}

//fução normal
function myfuction(parmes1, parmes2, parmes3 = 0){
    //o parmes3 é opicional
    return  parmes1 + parmes2 + parmes3;
} 

//Lambada
()=>{}

//exeplo de usso
const print = (p) => {
    console.log(p);
    return ;
}

let variable;
variable = "";
//switch case
switch (variable) {
    case 1:
        print("1");
        break;
    case 2:
        print("2");
        break;
    default:
        print("nada");
        break;
}

//mesamas coisa -> "="*30
console.log("=".repeat(30));



