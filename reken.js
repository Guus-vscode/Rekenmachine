    
    function squareRoot() {
        const display = document.getElementById('display');
        const value = parseFloat(display.value);
        if (!isNaN(value)) {
            display.value = Math.sqrt(value);
            display.dataset.expression = display.value; 
        }
    }

    function cubeRoot() {
        const display = document.getElementById('display');
        const value = parseFloat(display.value);
        if (!isNaN(value)) {
            display.value = Math.cbrt(value);
            display.dataset.expression = display.value; 
        }
    }

    function squarePerimeter() {
        const display = document.getElementById('display');
        const value = parseFloat(display.value);
        if (!isNaN(value)) {
            display.value = 4 * value;
            display.dataset.expression = display.value; 
        }
    }

    function cubePerimeter() {
        const display = document.getElementById('display');
        const value = parseFloat(display.value);
        if (!isNaN(value)) {
            display.value = 12 * value;
            display.dataset.expression = display.value; 
        }
    }

    function clearone() {
        const display = document.getElementById('display');
        const value = display.value;
        display.value = value.substr(0, value.length - 1);
        display.dataset.expression = (display.dataset.expression || '').slice(0, -1);
    }

    function carrot() {
        const display = document.getElementById('display');
        const value = parseFloat(display.value);
        if (!isNaN(value)) {
            display.value = Math.sqrt(value);
            display.dataset.expression = display.value;
        }
    }

    function pi() {
        const display = document.getElementById('display');
        display.value += 'π';
        display.dataset.expression = (display.dataset.expression || '') + Math.PI;
    }

    function square() {
        const display = document.getElementById('display');
        const value = parseFloat(display.value);
        if (!isNaN(value)) {
            display.value = value * value;
            display.dataset.expression = display.value;
        }
    }

    function cube() {
        const display = document.getElementById('display');
        const value = parseFloat(display.value);
        if (!isNaN(value)) {
            display.value = value * value * value;
            display.dataset.expression = display.value;
        }
    }

    function appendNumber(number) {
        const display = document.getElementById('display');
        display.value += number;
        display.dataset.expression = (display.dataset.expression || '') + number;
    }

    function appendOperator(operator) {
        const display = document.getElementById('display');
        if (operator === '*') {
            display.value += 'x'
        } else if (operator === '/') {
            display.value += '÷'; 
        } else {
            display.value += operator; 
        }
        display.dataset.expression = (display.dataset.expression || '') + operator; 
    }

    function clearDisplay() {
        const display = document.getElementById('display');
        display.value = '';
        display.dataset.expression = ''; 
    }

    function calculateResult() {
        const display = document.getElementById('display');
        try {
            const expression = display.dataset.expression || display.value; 
            display.value = eval(expression);
            display.dataset.expression = ''; 
        } catch (e) {
            display.value = 'Error';
        }
    }