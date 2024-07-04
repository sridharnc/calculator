const display = document.getElementById('display');
const result=document.getElementById('result')

function clearDisplay() {
    display.value = '';
    result.textContent='';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    display.value += value;
}

function calculateResult() {
    try {
        const result1 = eval(display.value);
        result.textContent= result1
    } catch (e) {
        alert('Invalid Expression');
    }
}
