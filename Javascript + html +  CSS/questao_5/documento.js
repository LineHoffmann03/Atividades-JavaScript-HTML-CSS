/**
 * O (iValor) irá ser incluso dentro do array em uma posição aleatória, sem sobreescrever um valor e e se a posição ja estiver ocupada ela ira andar uma casa para frente 
 * 
 * @param {Array} aArray 
 * @param {Integer} iValor 
 * 
 * 
 * @returns {Array}
 */

function jAddValNoArray(aArray, iValor) {
  var iPosicao = Math.floor(Math.random() * 10)
  if (aArray[iPosicao] === undefined) {
    aArray[iPosicao] = iValor;
  } else {
    for (var index = aArray.length - 1; index >= 0; index--) {
      var iTemp = aArray[index];
      aArray[index + 1] = iTemp;
      if (index == iPosicao) {
        aArray[index] = iValor;
        break;
      } else {
        aArray[index] = aArray[index - 1];
      }

    }
  }
  return aArray;
}
