function calc1(number1, operator, number2)  {
    if (operator === '/' && number2 === 0) {
        alert('На ноль делить нельзя');

    } else if (operator === '+') {
        alert(number1 + number2);

    } else if (operator === '-') {
        alert(number1 - number2);

    } else if (operator === '*') {
        alert(number1 * number2);

    } else if (operator === '/') {
        alert(number1 / number2);
    }
}

function calc2(number1, operator, number2) {
    switch (operator) {
        case '*':
            alert(number1 *  number2);
            break;
        case '/':
            number2 === 0
                ? alert('На ноль делить нельзя')
                : alert(number1 /  number2);

            break;
        case '+':
            alert(number1 +  number2);
            break;
        case '-':
            alert(number1 -  number2);
            break;
    
        default:
            break;
    }
}

calc1(13, '*', 23);
calc2(13, '*', 23);
calc2(13, '/', 0);
calc2(13, '/', 2);
