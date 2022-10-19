var iCountClick = 1;

var aQuadrados = document.getElementsByClassName('JogoVelha');
for (var i = 0; i < aQuadrados.length; i++) {
  aQuadrados[i].addEventListener('click', function () {
    iCountClick += 1;

    if (iCountClick % 2 == 0) {
      jDesenharX(this.id);
    } else {
      jDesenharO(this.id);
    }
  });
}
/**
 * função de por as imagens dos (x) nos quadrados do jogo da velha 
 * 
 * @param {string} sIdElement 
 * 
 * @returns {void}
 */
function jDesenharX(sIdElement) {
  var tagImg = document.createElement('img');
  tagImg.src = './img/xis.png';
  tagImg.style = 'width: 80px';
  tagImg.className = 'X';
  tagImg.id = 'img-' + sIdElement;
  var element = document.getElementById(sIdElement);

  if (!document.getElementById(sIdElement).contains(document.getElementById(tagImg.id))) {
    element.appendChild(tagImg);
  }
  setTimeout(jVerificarGanhador, 10);
}

/**
 * Função de por as iamgens das (o) nos quadrados do jogo da velha 
 * 
 * @param {string} sIdElemento 
 * 
 * @returns {void}
 */

function jDesenharO(sIdElemento) {
  var oImg = document.createElement('img');
  oImg.src = './img/bolinha.png';
  oImg.style = 'width: 80px';
  oImg.id = 'img-' + sIdElemento;
  oImg.className = 'O';
  var element = document.getElementById(sIdElemento);

  if (!document.getElementById(sIdElemento).contains(document.getElementById(oImg.id))) {
    element.appendChild(oImg);
  }
  setTimeout(jVerificarGanhador, 10);
}

/**
 * Retorna a classe do elemento do jogo da velha (x ou o) ou o id do prório elemento quadrado
 * 
 * @param {string} sId 
 * 
 * @returns {string}
 */
function jGetValorCampo(sId) {
  try {
    return document.getElementById(sId).firstChild.className
  } catch (error) {
    return sId
  }
}
/**
 * Função que verifica as posições e o ganhador do jogo da velha, aciona um alert se (x) ou (o) ganhou.
 * 
 * @returns {void}
 */
function jVerificarGanhador() {

  if ((jGetValorCampo('Q1') == jGetValorCampo('Q2')) && (jGetValorCampo('Q2') == jGetValorCampo('Q3'))) {
    alert(jGetValorCampo('Q1') + ' ' + 'Ganhou!!');
  }
  if ((jGetValorCampo('Q4') == jGetValorCampo('Q5')) && (jGetValorCampo('Q5') == jGetValorCampo('Q6'))) {
    alert(jGetValorCampo('Q4') + ' ' + 'Ganhou!!');
  }
  if ((jGetValorCampo('Q7') == jGetValorCampo('Q8')) && (jGetValorCampo('Q8') == jGetValorCampo('Q9'))) {
    alert(jGetValorCampo('Q7') + ' ' + 'Ganhou!!');
  }

  if ((jGetValorCampo('Q1') == jGetValorCampo('Q4')) && (jGetValorCampo('Q4') == jGetValorCampo('Q7'))) {
    alert(jGetValorCampo('Q1') + ' ' + 'Ganhou!!');
  }
  if ((jGetValorCampo('Q2') == jGetValorCampo('Q5')) && (jGetValorCampo('Q5') == jGetValorCampo('Q8'))) {
    alert(jGetValorCampo('Q2') + ' ' + 'Ganhou!!');
  }
  if ((jGetValorCampo('Q3') == jGetValorCampo('Q6')) && (jGetValorCampo('Q6') == jGetValorCampo('Q9'))) {
    alert(jGetValorCampo('Q3') + ' ' + 'Ganhou!!');
  }

  if ((jGetValorCampo('Q1') == jGetValorCampo('Q5')) && (jGetValorCampo('Q5') == jGetValorCampo('Q9'))) {
    alert(jGetValorCampo('Q1') + ' ' + 'Ganhou!!');
  }
  if ((jGetValorCampo('Q3') == jGetValorCampo('Q5')) && (jGetValorCampo('Q5') == jGetValorCampo('Q7'))) {
    alert(jGetValorCampo('Q3') + ' ' + 'Ganhou!!');
  }
}

