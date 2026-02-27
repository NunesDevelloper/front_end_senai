/*const fs = require('fs');

const dados = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo"
};


const jsonString = JSON.stringify(dados, null, 2);

function salvando(_dict){
    fs.writeFile('./db.json', jsonString, (err) => {
        if (err) console.error(err);
        console.log('Arquivo JSON salvo.');
    });
}*/

const BtnAdd = document.getElementById("BtnAdd");
const closeAdd = document.getElementById("closeAdd");
const modalAdd = document.getElementById("modalAdd");
const modalEdit = document.getElementById("modalEdit");
const BtnEdit = document.getElementById("BtnEdit");
const closeEdit = document.getElementById("closeEdit");

const closeModal = (obj) => { obj.style.display = "none";}

closeAdd.addEventListener("click", ()=>{closeModal(modalAdd)});

closeEdit.addEventListener("click", ()=>{closeModal(modalEdit)});

BtnAdd.addEventListener("click", (e) => {
    //como a taga está -> <a href"#"> é para não recarrega/ir para o inicio do site
    e.preventDefault(); 
    modalAdd.style.display = "block";
});

BtnEdit.addEventListener("click", (e) =>{
    e.preventDefault(); 
    modalEdit.style.display = "block";
})

//quano o user clicar fora da tela
window.addEventListener("click", function(e){
    //se o modalAdd éstar aberto então a fecha
    if(e.target === modalAdd){closeModal(modalAdd);}
    if(e.target === modalEdit){closeModal(modalEdit);}
});

