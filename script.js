

function total() {
    const first = parseFloat(document.getElementById("firstNumber").value);
    const second = parseFloat(document.getElementById("secondNumber").value);
    let totalNum = first + second;
    alert(totalNum);
    console.log(totalNum);
}

function difference() {
    const first = parseFloat(document.getElementById("firstNumber").value);
    const second = parseFloat(document.getElementById("secondNumber").value);
    let differenceNum = first - second;
    alert(differenceNum);
    console.log(differenceNum);
}

function multiply() {
    const first = parseFloat(document.getElementById("firstNumber").value);
    const second = parseFloat(document.getElementById("secondNumber").value);
    let multiplyNum = first * second;
    alert(multiplyNum);
    console.log(multiplyNum);
}

function divide() {
    const first = parseFloat(document.getElementById("firstNumber").value);
    const second = parseFloat(document.getElementById("secondNumber").value);
    let divideNum = first / second;
    alert(divideNum);
    console.log(divideNum);
}

function modulus() {
    const first = parseFloat(document.getElementById("firstNumber").value);
    const second = parseFloat(document.getElementById("secondNumber").value);
    let modulusNum = first % second;
    alert(modulusNum);
    console.log(modulusNum);
}