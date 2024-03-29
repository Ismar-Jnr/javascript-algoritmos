/**
        Capturar 2 números
        e fazer as operações matemáticas
        de soma, subtração, multiplicação, divisãe resto da divisão(mod);

        e mostrar um alert() para cada resultado
 */

        let firstNumber = prompt('Digite o primeiro número'); // capturou numeros em formato de string
        let secondNumber = prompt('Digite o segundo número');

        firstNumber = Number(firstNumber); // convertou as strings em numeros
        secondNumber = Number(secondNumber);

        const sum = firstNumber + secondNumber;
        const sub = firstNumber - secondNumber;
        const multi = firstNumber * secondNumber;
        const div = firstNumber / secondNumber;
        const restDiv = firstNumber % secondNumber;

        alert(`Resultado da soma: ${sum}`);
        alert(`Resultado da subtração: ${sub}`);
        alert(`Resultado da multiplicação: ${multi}`);
        alert(`Resultado da divisão: ${div}`);
        alert(`Resultado do resto da divisão: ${restDiv}`);