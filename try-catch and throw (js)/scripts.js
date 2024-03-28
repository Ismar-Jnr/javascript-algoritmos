// throw
//      => throw = disparar/lançar

function sayMyName(name = ''){
    if(name === ''){
        throw "Nome é obrigatório" //disparou um erro que o "catch" irá capturar através do parametro;

        //Obs: o throw irá interromper a aplicação, por isso é importante usar o "try/catch"; pois o catch vai capturar o erro mas vai continuar a aplicação depois do catch;
    }

    console.log(name);
}
// try...catch
//              try => tentar
//              catch => capturar

// Exemplo com erro, para o catch poder capturar;
try { 
    //tenta executar a função, caso nao consiga executar, o catch irá capturar o erro;
    sayMyName();

} catch(e){ //capturou o erro  "throw";
    console.log(e);
}

console.log('após a função de erro: "throw", seguimos a aplicação');
//----------------------------------------


//veja outro exemplo, dessa vez sem erro;
try{
    sayMyName('Ismar');
}catch(e){
    console.log(e);
}
console.log('try/catch onde nao houve erro, logo, o catch não capturou erro algum, pois o try executou a função normalmente');