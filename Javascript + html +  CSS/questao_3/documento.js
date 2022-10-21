/**
 * Descobrir se pelo seu ano de nascimento é maior de idade ou menor, o parametro necessita ser inteiro.
 * 
 * @param {integer} iAno 
 * 
 * 
 * @returns {String}
 */

function jMaioridadeNascimento(iAno) {
  var iIdade = 2022 - iAno;
  if ((Math.floor(iAno) != iAno)) {
    return undefined;
  } else if (iIdade >= 18) {
    return 'Maior de idade';
  } else if (iIdade < 18) {
    return 'Menor de idade';
  }

}





