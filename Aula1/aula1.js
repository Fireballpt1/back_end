// function resultadoTrabalho(nota1, nota2, nota3){
//    return nota1 * 0.3 + nota2 * 0.3 + nota3 * 0.4;
// }

// function main() {
//     var nota1 = 15;
//     var nota2 = 12;
//     var nota3 = 10;
//     var resultadoT = resultadoTrabalho(nota1,nota2,nota3);
//     console.log("Nota Final: " + resultadoT);
// }

// main()

// function nomeMes(mes) {

//     switch (mes) {
//         case 1:
//             console.log("Janeiro");
//             break;
//         case 2:
//             console.log("Fevereiro");
//             break;
//         case 3:
//             console.log("Marco");
//             break;
//         case 4:
//             console.log("Abril");
//             break;
//         case 5:
//             console.log("Maio");
//             break;
//         case 6:
//             console.log("Junho");
//             break;
//         case 7:
//             console.log("Julho");
//             break;
//         case 8:
//             console.log("Agosto");
//             break;
//         case 9:
//             console.log("Setembro");
//             break;
//         case 10:
//             console.log("Outubro");
//             break;
//         case 11:
//             console.log("Novembro");
//             break;
//         case 12:
//             console.log("Dezembro");
//             break;
//         default:
//             console.log("Nao existe esse mes");
//     }
// }
// nomeMes(3);


function numerosOperacao(num1, num2, op){
   if(op == "+"){
       return (num1,"+",num2 );
   }
   else if (op == "-"){
       return (num1,"-",num2);
   }
   else if (op == "/"){
       return (num1,"/",num2);
   }
   else{
       return (num1,"*",num2);
   }

    
    
}
numerosOperacao(2,2,"*")