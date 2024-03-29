/*
    ** Jogo da adivinhação **
    
    Apresente ao usuário a mesngem:
    "Adivinhe o número que estou pensando: Entre 0 e 10"

    Crie uma lógica para gerar um número aleatório e 
    verificar ses o número digitado é o mesmo que o aleatório gerado pelo sistema;

    Enquanto o usuário não adivinhar o número, mostrar a mensagem:
    "Erro, tente novamente:"

    Caso o usuário acerte o número, apresentar a mensagem:
    "Parabéns! Você adivinhou em x tentativas"
 */

    let result = prompt("Adivinhe o número que estou pensando? (Entre 0 e 10)");
    const randomNumber = Math.round(Math.random() * 10);

    //Math é um "pacote" que possui propriedades matematicas;
    //          Math.random irá gerar um numero aleatorio de 0 a 1;    
    //          Fazemos Math.random() * 10; para esse numero ficar entre 0 e 10; como pedido no exercicio;
    
    // E por fim, usamos Math.round(), para remover o ponto flutuante, e arredondar para cima ou para baixo, de acordo com a variação. Exemplo: 9.5 = 10
    //                                                     9.4 = 9


    let contador = 1;

    
    while(Number(result) != randomNumber){
        result = prompt("Erro, tente novamente: ");
        contador++;

    }

    if(contador == 1){
        alert(`Parabéns! Você adivinhou em ${contador} tentativa`);
    } else {
        alert(`Parabéns! Você adivinhou em ${contador} tentativas`);
    }

    
    


    