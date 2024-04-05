const message = "mensagem"; // essa variável fica isolada nesse arquivo e nao consigo usar ela em outro lugar;
// A não ser que.... eu exporte ela


/*          IMPORTAÇÃO/EXPORTAÇÃO DEFAULT               */
//export default message; // nesse caso o "default" exporta a variavel, podendo ser acessada em outro arquivo; 
//OBS: Só é possivel usar 1 default por arquivo
/*---------------------------------------------------*/
/*---------------------------------------------------*/
/*---------------------------------------------------*/
/*
                IMPORTAÇÃO/EXPORTAÇÃO NAMED
*/
//Mas Ismar, e se eu quiser exportar mais coisas? 
//Veja abaixo: 

const text = "texto";
const novamensagem = "outra mensagem"
//criado os objetos que deseja exportar, agora faça a exportação deles da seguinte forma: 

export { text, novamensagem } // no arquivo ao qual deseja importar, deve importar da mesma maneira que esta aqui, entre { } e com os nomes iguais, diferente do "default", esse modo de exportação exige que o nomes sejam iguais.
/*----------------------------------------------------*/
/*---------------------------------------------------*/
/*---------------------------------------------------*/
//Outra maneira de exportar é a seguinte: 

export const novamenteExportando = "Outra maneira de exportar"; //Dessa forma ele ja cria a variavel e exporta junto; 
/*---------------------------------------------------*/
/*---------------------------------------------------*/
/*---------------------------------------------------*/
//Outro Exemplo:

export const today = Date.now();

//exportando um valor já existente
const double = (number) => number * 2;
export {double};
/*--------------------------------------------------------*/
/*--------------------------------------------------------*/
/*--------------------------------------------------------*/

/*              IMPORTAÇÃO/EXPORTAÇÃO MISTA

Tambem é possivel fazer importação mista
     export comun + export default; Veja: */
const date = new Date();
const greeting = (name) => `hello ${name}`;

export default function (argument){
    console.log(date, greeting(argument));
}
export { date, greeting};
/*--------------------------------------------------------*/
/*--------------------------------------------------------*/
/*--------------------------------------------------------*/
/* 
                IMPORT AS                                 */
    export function su(a, b){
        return a + b;
    }

/*
    Tambem é possivel importar/exportar multiplos itens e dar um nome padrão.
*/
export const sum = (a , b) => a + b
export const multiply = (a , b) => a * b
export const subtract = (a , b) => a - b
export const divide = (a , b) => a / b
//ou 
// export {sum, multiply, subtract, divide}
