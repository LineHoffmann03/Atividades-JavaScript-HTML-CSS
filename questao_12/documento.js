//Executa uma função ou instrução varias vezes em um determinada intervaulo de tempo
setInterval(function () {
    // cria um novo objeto de datas com data e horas atuais.
    var iData = new Date();
    // retorna as horas de uma data 
    var iHoras = iData.getHours();
    // retorna os minutos de uma data 
    var iMinutos = iData.getMinutes();
    // retorna os segundos de uma data 
    var iSegundos = iData.getSeconds();

    // verificar se as horas,minutos e segundos são maiores que 10, se não forem acresenta 0 na frente.

    if (iHoras < 10) {
        iHoras = '0' + iHoras;
    }
    if (iMinutos < 10) {
        iMinutos = '0' + iMinutos;
    }
    if (iSegundos < 10) {
        iSegundos = '0' + iSegundos;
    }

    //Inserir horas,minutos e segundos no arquivo html.
    document.getElementById('relogio').innerHTML = iHoras + ':' + iMinutos + ':' + iSegundos;
}, 1000);


