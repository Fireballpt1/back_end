function imc(peso, altura){
    imc= peso/(altura*altura);
    if (imc<8.5){
        console.log("Abaixo do peso");
    }else if(imc>=8.5 && imc<25){
        console.log("No peso normal");
    }else if(imc>=25 && imc<30){
        console.log("acima do peso");
    }else {
        console.log("obeso");
    }
}
// imc(85,1.50);

function inverter(){
   console.log( ' Hoje e Domingo Saída'.split('').reverse().join(''));
}

//inverter();

