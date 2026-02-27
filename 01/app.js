//mmc
//peso / (altura²)

function mmc(pesso, altura){
    if (pesso <= 0 && altura <= 0)
    {
        let mmc_valor = pesso /(altura * altura);
        
        console.log(mmc_valor.toFixed(2));
    }
    else
    {
        console.log("Erro -> pesso ou altura invalida");
    }
}


mmc(15, 7);
