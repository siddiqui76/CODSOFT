document.addEventListener("DOMContentLoaded", function() {
    let inputField = document.getElementById("inputBox");
    let calculatorButtons = document.querySelectorAll("button");

    calculatorButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            let buttonValue = event.target.innerHTML;

            if (buttonValue === '=') {
                try {
                    inputField.value = evaluateExpression(inputBox.value);
                } catch (error) {
                    inputBox.value = 'Error';
                }
            } else if (buttonValue === 'C') {
                inputBox.value = '';
            } else {
                inputBox.value += buttonValue;
            }
        });
    });

    function evaluateExpression(expression) {
        return new Function('return ' + expression)();
    }
});

