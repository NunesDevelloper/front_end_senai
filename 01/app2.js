//inputs 
const INPUT_NOME = "Fulano";
const INPUT_HORAS_ESTACIONADO = 2; 
const INPUT_VIP = true;

//constante uteis para o sistema
const DIARIA = 20.00;
const PRECO_HORA = 8.00;

function calcular_preco_final(nome, horas, vip) {
    let valor_pagar = 0;

    //logistica do pagamento
    if (horas > 3) {
        valor_pagar = DIARIA + (horas * PRECO_HORA);
    } else {
        valor_pagar = horas * PRECO_HORA;
    }

    //desconto caso vip
    if (vip===true) {
        valor_pagar *= 0.20; 
    }

    console.log(`Nome do cliente: ${nome}`);
    console.log(`Valor a pagar R$: ${valor_pagar.toFixed(2)}`);
    
}

calcular_preco_final(INPUT_NOME, INPUT_HORAS_ESTACIONADO, INPUT_VIP);


