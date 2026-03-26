const resultado = document.getElementById('resultado');



function add(x) {
    if (resultado.value === '0') {
        resultado.value = ''
    }
    const operadores = ['+', '-', '*', '/']
    if (operadores.includes(x)) {
        for (let i = 0; i < operadores.length; i++) {
            if (resultado.value.endsWith(operadores[i])) {
                resultado.value = resultado.value.slice(0, -1,)
                break       //!!! dai acaba o for e executa o resultado.value +=x
            }
        }
    }


    return resultado.value += x
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
    resultado.value = "it's me"     
   }
}
function inversao() {
    if (resultado.value.startsWith('-')) {
        resultado.value = (resultado.value.slice(1))
    } else {
        resultado.value = '-'+resultado.value
    }
}

 if (resultado.value === "it's me" || resultado.value === "Infinity" || resultado.value === "NaN") {
    const gif = document.querySelector("./img/display.png");
    gif.style.display = "block";
    }
     else {
    resultado.value = `${resultado.value}*2`
    console.log(resultado.value);
    continha.operacao = resultado.value
    resultado.value = eval(resultado.value);
    }
    