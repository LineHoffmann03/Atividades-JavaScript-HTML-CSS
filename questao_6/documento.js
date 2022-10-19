//Retorna o elemento através do ID
var oBtn_enviar = document.getElementById("oBtn-enviar");
var oInput;

var aListaNOrdenada = document.getElementById('lista-no');

/**
 * Adicionar e criar um elemento (li) de uma lista (ul) Html especificada pela tag para formar um array. 
 * 
 * @param {Array} aTexto 
 * 
 * @returns {void}
 */
function jAdicionarLista(aTexto) {
  for (var i = 0; i < aTexto.length; i++) {
    //cria um elemento HTML especificado pela tag
    var iElemento = document.createElement("li");
    iElemento.textContent = aTexto[i];
    //insere uma nova estrutura do DOM de um documento
    aListaNOrdenada.appendChild(iElemento);

  }
}
// executa uma função ao clicarmos no elemento
oBtn_enviar.onclick = function () {
  oInput = document.getElementById("teste").value;
  // o metado split divide uma string em uma lista de substrings
  var aArray = oInput.split(',');
  //ordena os elementos do array
  aArray.sort();
  //adicionar a lista no onclick
  jAdicionarLista(aArray);

  console.log(aArray);
}

