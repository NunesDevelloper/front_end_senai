const kmInicialInput = document.getElementById('kmInicialInput');
const kmFinalInput = document.getElementById('kmFinalInput');
const LaInput = document.getElementById('LaInput');
const pLInput = document.getElementById('pLInput');
const resultado = document.getElementById('resultado');
const button = document.getElementById('button');
const btn = document.getElementById("resert");

const erro = (obj) => {
    resultado.innerHTML = "Erro: "+ obj;
    resultado.style.color = "#ff0000";
}

const output = (kmRodados, consumoMedio, custoTotal, custoPorKm) => {
    resultado.innerHTML = 
    `Km rodado: ${kmRodados} km <br>
    Consumo médio: ${consumoMedio.toFixed(2)} + km/l <br>
    Custo total: ${custoTotal.toFixed(2)} <br>
    Custo por km: R$ ${custoPorKm.toFixed(2)}
    `
    resultado.style.color = "#000000"
}

function caucular()
{
    let kmInicial = Number(kmInicialInput.value);
    let kmFinal = Number(kmFinalInput.value);
    let litros = Number(LaInput.value);
    let preco = Number(pLInput.value);

    if (kmInicial == 0 && kmFinal == 0  && litros == 0 && preco== 0) 
    {
        erro("Informe um valor nos campos");
        return;
    }

    if (kmFinal <= kmInicial)
    {
        erro("A quilometragem final deve ser maior que a inicial!");
        return;
    }

    if (litros <= 0 || preco <=0 )
    {
        erro("Litros e preços devem ser maiores que zero");
        return;
    }

    let kmRodado = kmFinal - kmInicial;
    let consumoMedio = kmRodado/litros;
    let custoTotal = litros * preco;
    let custorPorKm = custoTotal/ kmRodado;

    output(kmRodado, consumoMedio, custoTotal, custorPorKm);
}

function rester()
{
    resultado.innerHTML = "Resultado:";
    resultado.style.color = "#000000";
    kmInicialInput.value ="";
    kmFinalInput.value ="";
    LaInput.value ="";
    pLInput.value = "";
}

button.addEventListener("click", ()=>{
    caucular();
});


btn.addEventListener("click", () =>{
    rester();
});

