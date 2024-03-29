/**
 Pergunte o nome do usuário e escreva a mensagem: 
  "Olá, [nome do usuário]"
 */
  let name = prompt("Qual o seu nome?"); // prompt retorna o valor respondido pelo usuário; e armazena na variavel name;
  
  alert(`Olá, ${name}`);
  /*-------------------------------------------------------------------------------------*/


  // Solicite 2 numeros, faça a soma deles e apresente o resultado final ao usuario;

  alert("Iremos somar 2 numeros");
  let number1 = prompt("Qual o primeiro numero?");
  let number2 = prompt("Qual os segundo numero?");
  let result = Number(number1) + Number(number2);
  alert(result);

  alert("Divisão por 5");
  alert("Resultado final:" + (result) / 5);
  
