let displayValue = ''
let previousResult = null

function ac() {
    displayValue = '0'
    document.getElementById("display").innerHTML = '0'
    document.getElementById("previousDisplay").innerHTML = '0'
}

function adicionarNumero(value) {
    if (displayValue === '0' || displayValue === 'Error') {
        displayValue = value.toString()
    } else {
        displayValue += value.toString()
    }
    document.getElementById('display').innerHTML = displayValue
}

function del() {
    displayValue = displayValue.slice(0, -1)
    if (displayValue === '') {
        displayValue = '0'
    }
    document.getElementById('display').innerHTML = displayValue
}

function calcular() {
    try {
        let resultado = eval(displayValue);
        previousResult = resultado
        displayValue = resultado.toString();
        document.getElementById('previousDisplay').innerHTML = previousResult;
        document.getElementById('display').innerHTML = resultado;
    } catch (error) {
        document.getElementById('display').innerHTML = 'Error';
    }
}