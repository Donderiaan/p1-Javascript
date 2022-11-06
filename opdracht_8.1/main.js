let output = document.getElementById("Tof")

function PlusCalculate() {
    let input1 = document.getElementById("input");
    let input2 = document.getElementById("input_1");
    
    let x = Number(input1.value);
    let y = Number(input2.value);

    output.innerText = x + y

    if (x < 0 || y < 0) output.innerText = "het getal is te laag🖕"
}

function MinusCalculate() {
    let input1 = document.getElementById("input");
    let input2 = document.getElementById("input_1");
    
    let x = Number(input1.value);
    let y = Number(input2.value);

    output.innerText = x - y

    if (x < 0 || y < 0) output.innerText = "het getal is te laag🖕"
}

function MultiplyCalculate() {
    let input1 = document.getElementById("input");
    let input2 = document.getElementById("input_1");
    
    let x = Number(input1.value);
    let y = Number(input2.value);

    output.innerText = x * y;

    if (x < 0 || y < 0) output.innerText = "het getal is te laag🖕"
}

function DivideCalculate() {
    let input1 = document.getElementById("input");
    let input2 = document.getElementById("input_1");
    
    let x = Number(input1.value);
    let y = Number(input2.value);

    output.innerText = x / y

    if (x < 0 || y < 0) output.innerText = "het getal is te laag🖕"
}