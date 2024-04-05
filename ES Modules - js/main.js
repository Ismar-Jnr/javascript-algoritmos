import './utils.js'; // a exportação feita dessa forma importa e ja executa o arquivo.

/*          IMPORTAÇÃO/EXPORTAÇÃO DEFAULT               */
//import message from './utils.js'; //nessa linha ele importa a variável "message" (que poderia ter qualquer outro nome nesse arquivo, ja que é uma exportação "default") do arquivo "utils.js";
//console.log(message);
/*----------------------------------------------------*/


//Porém uma exportação default, só é possivel ser feita uma vez por arquivo, cso queira exportar/importar mais objetos, deve ser como no exemplo abaixo: 
/*
                IMPORTAÇÃO/EXPORTAÇÃO NAMED
*/
import { text, novamensagem } from './utils.js'; // importou ambas as variaveis do arquivo "utils.js"

// A ordem em que são chamadas não importa, porém os nomes tem que ser iguais.

console.log(text, novamensagem, text);
console.log(novamensagem, text, novamensagem); 
/*---------------------------------------------------*/

import { novamenteExportando } from './utils.js';
console.log(novamenteExportando);



console.log(/*message,*/ text, novamensagem, novamenteExportando); //uma vez importados, pode ser usado em qualquer parte do codigo;
/*---------------------------------------------------*/
/*---------------------------------------------------*/
/*---------------------------------------------------*/
// Outro Exemplo: 

import { today } from './utils.js';
console.log(today) // importado const "today"


import { double } from './utils.js';
console.log(double(5)); // no arquivo utils.js double é uma funçao que dobra o valor de um numero, logo ela espera receber um numero como parametro/referencia;
/*--------------------------------------------------------*/
/*--------------------------------------------------------*/
/*--------------------------------------------------------*/

//              IMPORTAÇÃO/EXPORTAÇÃO MISTA
import funcaoDefault, { date, greeting} from './utils.js'; // essa linha importou a função pelo metedo "default" e importou os outros objetos pelo nome (named);

console.log(date);
console.log(greeting('Ismar')); // greeting é uma função que espera um argumento, nesse caso "Ismar";

funcaoDefault('Argumento tipo texto'); // chamou a função do arquivo "utils.js", que tambem espera um argumento tipo texto
/*--------------------------------------------------------*/
/*--------------------------------------------------------*/
/*--------------------------------------------------------*/
/*
                    IMPORT AS                              */
    import { sum as soma} from './utils.js';
    // esse import renomeia a função sum criada no outro arquivo, para soma, logo, quando for usa-la, deve ser chamada pelo novo nome, o nome antigo, obviamente não será reconhecido;

    console.log(soma(5,4))

/*
    Tambem é possivel importar/exportar multiplos itens e dar um nome padrão.
*/
import * as calculator from './utils.js';
console.log(calculator.divide(49, 7));


