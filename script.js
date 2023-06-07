var numero1;
var numero2;
var resultado;

function calcular() {
    numero1 = document.getElementById("numero1").value;
    numero2 = document.getElementById("numero2").value;
    resultado = document.getElementById("resultado");
    resultado.innerHTML = "Resultado: " + (numero1 + numero2);
}  
function limpar() {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("resultado").innerHTML = "";
}
