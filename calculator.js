function datos(valor){
    document.getElementById('Result').value += valor;
}
function operation(){
    let operacion = document.getElementById('Result').value;
    if(operacion === 0){
        document.getElementById('Result').value = "No hay Datos"
    }else{
        document.getElementById('Result').value = eval(operacion)
    }
}
function reset(){
    document.getElementById('Result').value = " ";
}

