function resultadoTrabalho(nota1, nota2, nota3){
   return nota1 * 0.3 + nota2 * 0.3 + nota3 * 0.4;
}

function main() {
    var nota1 = 15;
    var nota2 = 12;
    var nota3 = 10;
    var resultadoT = resultadoTrabalho(nota1,nota2,nota3);
    console.log("Nota Final: " + resultadoT);

}

// main()

function nomeMes(mes) {

    switch (mes) {
        case 1:
            console.log("Janeiro");
            break;
        case 2:
            console.log("Fevereiro");
            break;
        case 3:
            console.log("Marco");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Maio");
            break;
        case 6:
            console.log("Junho");
            break;
        case 7:
            console.log("Julho");
            break;
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Setembro");
            break;
        case 10:
            console.log("Outubro");
            break;
        case 11:
            console.log("Novembro");
            break;
        case 12:
            console.log("Dezembro");
            break;
        default:
            console.log("Nao existe esse mes");
    }
}
// nomeMes(3);


function numerosOperacao(num1, num2, op){
   if(op == "+"){
    console.log (num1+num2);
   }
   else if (op == "-"){
    console.log (num1-num2);
   }
   else if (op == "/"){
    console.log (num1/num2);
   }
   else if (op == "*"){
    console.log (num1/num2);
   }
   else{
    console.log ("nao existe essa operacao");
   }
   
}
// numerosOperacao(2,2,"+")

function multiplos(){
    for (i=1; i<20;i++){
        if (i % 5 == 0){
            console.log(i);
        }
    }
}
// multiplos();

function soma(){
  var  somatotal=0;
    for (i=1; i<=100;i++){
        somatotal+=i
    }
    console.log(somatotal) ;
}
soma();

function factorial (n) {
	var total = 1; 
	for (i=n; i>=1; i--) {
		total = total * i; 
	}
	console.log(total) ; 
}
// factorial(5);

// exercicio 11 
function maximo(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    if(num2 > num1 && num2 > num3){
        return num2;
    }
    else {
        return num3;
    }
}

function minimo(num1,num2,num3){
    if(num1 < num2 && num1 < num3){
        return num1;
    }
    if(num2 < num1 && num2 < num3){
        return num2;
    }
    else {
        return num3;
    }
}
function media(num1,num2,num3){
    return (num1+num2+num3)/3;
}

function total11(){
    num1=3;
    num2=6;
    num3=9;
    valor_Max = maximo(num1,num2,num3);
    valor_Min = minimo(num1,num2,num3);
    valor_Med = media(num1,num2,num3);
    return ("O maximo é : " + valor_Max + '\n' + "O minimo é :" + valor_Min + '\n' + "A media é :" + valor_Med + '\n')
}

//inline 
// operacao(2,3,'+');
// console.log(total11());