// Questão 1 
function jFah(F) {
    var nCelsius = ((F - 32) * 5) / 9;
    return 'A tempreatura em Graus Celsius é:' + nCelsius.toFixed(2) + 'ºC';
}

//Questão 2
function jParImpar(num) {
    if (num % 2 == 1) {
        return 'Número Ímpar'
    } else {
        return 'Número Par';

    }

}


// Questão 3 
function jNascimento(iAno) {
    var iIdade = 2022 - iAno;
    if (iIdade >= 18) {
        return 'Maior de idade'
    } else {
        return 'Menor de idade';
    }

}

// Questão 4
function jArray(aLista) {
    var aLista = [12, 4, 5, 5, 5, , 6];
    for (var i = aLista; i <= aLista; aLista++) {
        if (aLista[5] == undefined);
        aLista = aLista + 1;
    }
    console.log(aLista);
   
}

// Questão 5
var aTeste = [1, , , 1, , , 1];
console.log(aTeste.length);

function jParametro1(aArray, iValor) {
    var iPosicao = Math.floor(Math.random() * 10)

    console.log(iPosicao);
    if (aArray[iPosicao] === undefined) {
        aArray[iPosicao] = iValor;
    } else {
        //console.log('jogar para freente')
        for (var i = aArray.length; i >= iPosicao; i--) {
            aArray[i] = aArray[i - 1];
        }
    }
    return(aArray);
}

