/*
    Solicitar o nome do aluno e as 3 notas do bimestre
    calcular a média do aluno;

    A média positiva deverá ser maior que 6

    Se o aluno passou no bimestre, dar os parabens.

    Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação;

    Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota.

*/
let name = prompt("Qual o nome do aluno?");

alert(`Vamos calcular a media do: ${name}`);

let nota1 = prompt("Digite a primeira nota: ");
let nota2 = prompt("Digite a segunda nota: ");
let nota3 = prompt("Digite a terceira nota: ");

nota1 = Number(nota1);
nota2 = Number(nota2);
nota3 = Number(nota3);

let media = (nota1 + nota2 + nota3) / 3;

media = media.toFixed(2); // fixando 2 casas apos a virgula

if(media >= 6){
    alert(`Parabens ${name}, você passou!`);
    alert(`A média foi ${media}`);
} else {
    alert(`Vamos lá ${name}! Você é capaz de recuperar essa nota`);
    alert(`A média foi ${media}`);
}