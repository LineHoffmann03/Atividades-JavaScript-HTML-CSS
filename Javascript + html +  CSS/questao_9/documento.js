//retorna um elemento com base em seu ID
var oEnviar = document.getElementById("oEnviar");
var oInput;
var aNomesInvertidos = document.getElementById('lista-no');

/**
 * For na ordem decrescente para por os nomes em ordem invertida, adicionar e criar um elemento (p) no corpo do Html. 
 *  
 * @param {Array} aNomes 
 * 
 * @returns {void}
 */
function jAdicionarElemento(aNomes) {
  for (var i = aNomes.length - 1; i >= 0; i--) {
    var iElemento = document.createElement("p");
    iElemento.innerHTML = aNomes[i];
    //adicionar uma nova estrutura no DOM
    aNomesInvertidos.appendChild(iElemento);
  }
}
//executa uma função ao clicarmos no elemento
oEnviar.onclick = function () {
  oInput = document.getElementById("teste").value;
  // separa um array
  var aArray = oInput.split(',');
  // adicionar a lista no onclick
  jAdicionarElemento(aArray);
  // fazer a lista ficar de maneira invertida
  for (var i = aArray.length - 1; i >= 0; i--) {
    //printar o array em sua posição
    console.log(aArray[i]);

  }
}    
