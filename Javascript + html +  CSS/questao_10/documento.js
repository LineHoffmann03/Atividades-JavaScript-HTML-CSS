// retorna um elemento com base ao seu ID
var oSubmit = document.getElementById("oSubmit");
var oInput;

var sDataSeparada = document.getElementById('lista');

/**
 * Adicionar ou criar um elemento (p) tag no corpo do Html para formar a data separadamente.
 * 
 * @param {Array} aData 
 * 
 * @returns {void}
 */
function jAdicionarData(aData) {
  for (var i = 0; i < aData.length; i++) {
    // criar um elemento HTML especificado a sua tag
    var iElemento = document.createElement("p");
    iElemento.innerHTML = aData[i];
    //insere uma nova estrutura do DOM  de um documento
    sDataSeparada.appendChild(iElemento);

  }
}
//executa uma função oa clicarmos
oSubmit.onclick = function () {
  oInput = document.getElementById("data").value;
  //separa o array em substring
  var aArray = oInput.split("-");
  //adiciona a data no onclick
  jAdicionarData(aArray);
  console.log(aArray);
}
