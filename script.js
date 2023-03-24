const output = document.getElementById("output");
const equalButton = document.querySelector(".equal-button");
const resetButton = document.querySelector(".light-gray-button");

var curr;
var prev;
var operation;
var computation;

document.querySelectorAll(".gray-button").forEach(number => {
    number.addEventListener("click", () => {
        if (output.textContent.length < 8) {
            output.append(number.textContent)
            appendNumber(output.textContent)
        }
    })
})

document.querySelectorAll(".orange-button").forEach(expression => {
    expression.addEventListener("click", () => {
        output.textContent = "";
        chooseOperation(expression.textContent)
    })
})

equalButton.addEventListener("click", () => {
    compute()
    updateOutput();
})

resetButton.addEventListener("click", () => {
    output.textContent = "";
    curr = "";
    prev = "";
    operation = "";
    computation = "";
})

function appendNumber(number) {
    curr = parseFloat(number)
}

function chooseOperation(expression) {
    if (curr == "") return
    if (prev != "") {
        compute()
    }

    operation = expression;
    prev = curr;
    curr = "";
}

function compute() {
    switch (operation) {
        case "+":
            computation = prev + curr
            break;
        case "-":
            computation = prev - curr
            break;
        case "÷":
            computation = prev / curr
            break;
        case "x":
            computation = prev * curr
            break;
        default:
            return
    }
    curr = computation;
    operation = "";
    prev = "";
}

function updateOutput() {
    output.textContent = computation
}