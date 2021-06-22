let resultado = 0
function dividir(num1, num2) {
    if (num1 != 0 && num2 != 0 ) {
        resultado = num1 / num2
        console.log(resultado);
        return resultado ;
    }else{
        resultado = "No se puede dividir por cero"
        console.log(resultado);
        return resultado
    }
}

module.exports = dividir;