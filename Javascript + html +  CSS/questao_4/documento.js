/**
 * Descobrir a quantidade de itens dentro do array e se a uma posição vazia.
 */

function jArray() {
  var aLista = [1, , 8, 6, 1, 2, 8, 'Aline', 9, ,];
  for (var index = 0; index < aLista.length; index++) {
    if (aLista[index] === undefined) {
      console.log('Posição Vazia');
    }
  }
  console.log(aLista.length);

}
