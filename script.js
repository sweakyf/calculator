function calc1(number1, operator, number2)  {
    if (operator === '/' && number2 === 0) {
        alert('На ноль делить нельзя');

    } else if (operator === '+') {
        let result1 = number1 + number2;
        alert(result1);
        return result1;

    } else if (operator === '-') {
        let result2 = (number1 - number2);
        alert(result2);
        return result2;

    } else if (operator === '*') {
        let result3 = (number1 * number2);
        alert(result3);
        return result3;

    } else if (operator === '/') {
        let result4 = (number1 / number2)
        alert(result4);
        return result4;

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
