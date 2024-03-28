// Exemplo simples de calculado com switch()

// switch

function calculate(number1, operator, number2){
    let result;

    switch (operator){
        case '+':
            result = number1 + number2;
            break;

        case '-':
            result = number1 - number2;
            break;

        case '*':
            result = number1 * number2;
            break;
        
        case '/':
            result = number1 / number2;
            break;

        default:
            console.log("Não implementado");
            break;
    }

    return result;
}

console.log(calculate(4, '+', 8));
console.log(calculate(3, '*', 6));
console.log(calculate(40, '/', 5));
console.log(calculate(17, '-', 43));
console.log(calculate(12, '%', 2)); //não implementado