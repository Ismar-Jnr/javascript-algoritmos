/*
    Faça um programa que tenha um meni e apresente a seguinte mensagem: 

    Olá usuário! Digite o numero da opçao desejada

        1. Cadastra um item na lista
        2. Mostrar itens cadastrados
        3. Sair do programa

    O programa deverpa capturar o numero digitado pelo usuário e mostrar oo seguintes cenários:

    Case o usuário digite 1, ele podré cadastrar um item em uma lista
    Caso o usuário digite 2, ele poderá ver os itens cadastrados
        Se não houver nenhum item cadastrado, mostrar a mensagem:
            "Não existem itens cadastrados"
    Caso o usuário digite 3, a aplicação deverá ser encerrada.
*/
/*
    Dados de entrada do usuário
        1. Número desejado
        2. Item da lista

    Variáveis
        1. Opção digitada
        2. Lista de itens
*/

let option;
let listItems = [];
//console.log(option);

while(option != 3){

    option = Number(prompt(`
    Olá usuário! Digite o numero da opçao desejada

    1. Cadastra um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa`
    ));

    switch(option){
        case 1: //sequencia 1 
         let item = prompt("Digite o nome do item");
            listItems.push(item);
        break;


        case 2: //sequencia 2
            if(listItems.length == 0){
            alert("Não existem itens cadastrados");
        }else{
        alert(listItems);
        }
        break;


        case 3: //sequencia 3
            alert("Tchau!"); 
        break;
            
        default: //caminho padrão caso nao seja nenhum dos casos acima;
        alert("Opção invalida, tente novamente.");
    }

    

    console.log(option, listItems);
}

