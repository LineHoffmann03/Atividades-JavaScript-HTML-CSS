//retorna o elemento com base no seu ID
var oEenviar = document.getElementById("oEenviar");
var oInput;

var aListaNOrdenada = document.getElementById('listaOR');

/**
 * Adicionar e criar um elemento (li) de uma lista (ul) Html especificada pela tag e destacando os números pares.
 * 
 * @param {Array} aPares 
 * 
 * @returns {void}
 */
function jNumerosPares(aPares) {
  //a propriedade length retorna o comprimento de uma string
  for (var i = 0; i < aPares.length; i++) {
    //cria um elemento HTML especificado pela tag
    var iElemento = document.createElement("li");
    // retorna o texto com formatação e com elementos HTML
    iElemento.innerHTML = aPares[i];
    // inserir uma nova estrutura do DOM de um documento
    aListaNOrdenada.appendChild(iElemento);
    if (aPares[i] % 2 == 0) {
      // classList retorna os nomes de classes CSS
      iElemento.classList.add('pares');
    }
  }

}
//executa uma função ao clicarmos no elemento
oEenviar.onclick = function () {
  oInput = document.getElementById("numeros").value;
  //divide uma string em uma lista de substring
  var aArray = oInput.split(',');
  //adiciona a lista no onclick
  jNumerosPares(aArray);

  console.log(aArray);
}
