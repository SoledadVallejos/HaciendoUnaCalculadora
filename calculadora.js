const sumar = require('./sumar');
const restar = require('./restar');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');

let resultado = 0
function calculadora(num1, num2, operador) {
    if(!isNaN(num1) && !isNaN(num2)){
        if (operador == "sumar") {
             sumar(num1, num2); //Como requeri el modulo sumar, hago uso de el.
        }else if(operador == "restar"){
             restar(num1, num2);
        }else if(operador == "multiplicar"){
             multiplicar(num1, num2);
        }else if(operador == "dividir"){
             dividir(num1, num2);
        }else{
            console.log("Selecione una operacion");
            return resultado;
        }

    }else{
        console.log("Ingrese un numero valido")
        return resultado
    }
   
} 

//Funcion para ejecutar calculadora

const process = require('process');// Requiero process, módulo nativo de NodeJs 
console.log(process.argv);

const operacion = process.argv[2].toLowerCase();
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

calculadora(num1, num2, operacion)
// 0          1              2              3            4
//node  calculadora.js   operacion      numero1       numero2