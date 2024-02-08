function calcular(){
    switch(operacion.value){
        case "+":
            resultado.innerHTML = parseInt(numero1.value) + parseInt(numero2.value);
            break;
        case "-":
            resultado.innerHTML = parseInt(numero1.value) - parseInt(numero2.value);
            break;
        case "*":
            resultado.innerHTML = parseInt(numero1.value) * parseInt(numero2.value);
            break;
        case "/":
            resultado.innerHTML = parseInt(numero1.value) / parseInt(numero2.value);
            break;
    }

}