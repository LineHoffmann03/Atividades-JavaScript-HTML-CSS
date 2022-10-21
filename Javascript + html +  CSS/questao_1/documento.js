/**
 * Transforma a temperatura de Fahrenheit em graus celsius.
 * 
 * @param {Float} nFahrenheit 
 * 
 * 
 * @returns {float}
 */

function jFahrenheit(nFahrenheit) {
  var nCelsius = ((nFahrenheit - 32) * 5) / 9;
  var nCelsiusFormat = nCelsius.toFixed(2);
  return `A temperatura em Graus Celsius é: ${nCelsiusFormat} ºC`;
}