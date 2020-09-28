let operation = prompt("Introduce una operación")
const OPERATORS = ["+", "-", "*", "/"];

function runCalculator() {
    for (el of OPERATORS) {
        if (operation.includes(el)) {
            calculator(operation,el);
            break;
        } else {
            console.log(el, " is not here");
        }
    }
}

function calculator(str, operator) {
    const numbers = str.split(el);
    switch(operator) {
        case "+":
            console.log(parseInt(numbers[0]) + parseInt(numbers[1]));
            break;
        case "-":
            console.log(parseInt(numbers[0]) - parseInt(numbers[1]));
            break;
        case "*":
            console.log(parseInt(numbers[0]) * parseInt(numbers[1]));
            break;
        case "/":
            console.log(parseInt(numbers[0]) / parseInt(numbers[1]));
            break;
        default:
            console.log("Operation not valid");
            break;
    }       
}

runCalculator();