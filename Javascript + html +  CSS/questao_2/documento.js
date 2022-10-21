/**
 * Informar se o parametro inteiro (iIdade) é impar ou par se não for é undefined.
 * 
 * @param {integer} iIdade 
 * 
 * 
 * @returns {string}
 */

function jIdadeParOuImpar(iIdade) {
  if (iIdade % 2 == 1) {
    return 'Número Ímpar';
  } else if (iIdade % 2 == 0) {
    return 'Número Par';
  } else if (Number.isInteger(iIdade)) {
    return undefined;
  }

}
