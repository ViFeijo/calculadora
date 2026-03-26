const resultado = document.getElementById('resultado');

function add (value){
    resultado.value += value;
}
function limpa(){
    resultado.value ='';
}
function porcentagem(){
    resultado.value = (resultado.value)/100;
}
function calcular() {
   try{
    resultado.value = eval(resultado.value)
   } catch(error) {
    resultado.value = "hello world"
   }   
}
function inversao() {
    if (resultado.value.startsWith('-')) {
        resultado.value = (resultado.value.slice(1))
    } else {
        resultado.value = '-'+resultado.value
    }
}