//manipulação dom pelo dom
//document.getElementById(id da tag no html)
const myFrystButon = document.getElementById('myFrytButoon');
const myBody = document.getElementById("myBody");
const img = document.getElementById("img");

var list = ["https://images.steamusercontent.com/ugc/255965188116948531/1055F0B8522D9DDEDC67058CDA090B109D4C4137/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
"https://media.tenor.com/-l0vwa44aEkAAAAj/radom-fire.gif"
]

var is_buton = false;

function buttonClickte()
{
    if (is_buton === true)
    {
        myBody.style.backgroundColor = "#ffff";
        myBody.style.color = "#000000";
        img.src = list[0];
    }
    else
    {
        myBody.style.backgroundColor = "#000000";
        myBody.style.color = "#ffffff";
        img.src = list[1];
    }
}


myFrystButon.addEventListener("click", ()=>{
    is_buton = !is_buton;
    buttonClickte();
});