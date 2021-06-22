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