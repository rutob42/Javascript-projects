let num1 = '';
let num2 = '';
let currentOperator = '';

function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number; // Append the clicked number to the display
}

function setOperator(operator) {
    num1 = document.getElementById('display').value; // Store the first number
    currentOperator = operator; // Store the operator
    document.getElementById('display').value = ''; // Clear the display for the next number
}

function calculate() {
    num2 = document.getElementById('display').value; // Store the second number
    let result;

    
    // Perform the calculation based on the operator
    if (currentOperator == '+') {
        result = num1 + num2;
    } else if (currentOperator === '-') {
        result = num1 - num2;
    } else if (currentOperator === '*') {
        result = num1 * num2;
    } else if (currentOperator === '/') { // Correct operator check
        result = num1 / num2;
    } else {
        result = 'Error'; // Handle unexpected operator
    }

    document.getElementById('display').value = result; // Display the result
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
    num1 = ''; // Reset num1
    num2 = ''; // Reset num2
    currentOperator = ''; // Reset operator
}
