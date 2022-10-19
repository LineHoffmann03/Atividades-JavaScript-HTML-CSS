// retorna um elemento com base em seu ID
var oIenviar = document.getElementById("oIenviar");
var oInput;

var aListaNOrdenada = document.getElementById('listaExcluir');

/**
 * Adiciona e cria um um elemento (li) de uma lista (ul) Html especificada pela tag para com um clique os remover.
 * 
 * @param {Array} aRemover 
 * 
 * @returns {void}
 */
function jAdicionarLista(aRemover) {
  //a propriedade length retorna o comprimento de uma string
  for (var i = 0; i < aRemover.length; i++) {
    //cria um elemento HTML especificado pela tag
    var iElemento = document.createElement("li");
    // retorna o texto com formatação e com elementos HTML
    iElemento.innerHTML = aRemover[i];
    // inserir uma nova estrutura do DOM de um documento
    aListaNOrdenada.appendChild(iElemento);
  }
}
// executa uma função ao clicarmos no elemento
oIenviar.onclick = function () {
  oInput = document.getElementById("excluir").value;
  //separa o array em uma lista de substring
  var aArray = oInput.split(',');
  //adicionar a lista  no onclick
  jAdicionarLista(aArray);
  // querySelectorAll retorna a lista de elementos presente
  var aArrItens = document.querySelectorAll('li');
  // forEach intera cada elemento a um array
  // addEventListener permite configurar funções quando um evento especifico acontece, como um clique no botão
  aArrItens.forEach(i => i.addEventListener('click', () => i.remove()));

  console.log(aArray);
} 