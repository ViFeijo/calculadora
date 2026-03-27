const resultado = document.getElementById('resultado');
const operadores = ['+', '-', '*', '/'];


function add(x) {
    if (resultado.value === '0') {
        resultado.value = ''
    }
    if (operadores.includes(x)) {
        for (let i = 0; i < operadores.length; i++) {
            if (resultado.value.endsWith(operadores[i])) {
                resultado.value = resultado.value.slice(0, -1,)
                break
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
     try {
        let valor = eval(resultado.value);

        if (!isFinite(valor)) {
            throw new Error("Erro matemático");
        }

        resultado.value = valor;

    } catch (e) {
        ativarJumpscare();
    }
}
function inversao() {
    if (resultado.value.startsWith('-')) {
        resultado.value = (resultado.value.slice(1))
    } else {
        resultado.value = '-'+resultado.value
    }
}
function ativarJumpscare() {
    const gif = document.getElementById("jumpscare");
    const som = document.getElementById("som");

    gif.style.display = "block";
    som.play();

    setTimeout(() => {
        gif.style.display = "none";
    }, 800);
}