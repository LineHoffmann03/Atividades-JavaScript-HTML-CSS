var oCriarRelatorio = document.getElementById('oCriarRelatorio');

/**
 * Criar as linhas e as colunas da tabela no body e adicionando as trs no corpo Html.
 */
function jRelatorio() {
  for (var i = 0; i <= 20; i++) {
    var oTr = document.createElement('tr');
    var oTd1 = document.createElement('td');
    var oTd2 = document.createElement('td');
    var oTd3 = document.createElement('td');

    oTr.appendChild(oTd1);
    oTr.appendChild(oTd2);
    oTr.appendChild(oTd3);
    document.getElementById('body-table').appendChild(oTr);
  }
}
// quando clicado onclick executa uma função quando clicarmos no elemento
oCriarRelatorio.onclick = function () {

  document.getElementById('body-table').innerHTML = '';
  document.getElementById('foot-table').innerHTML = '';
  //criando os nomes dos alunos em um array
  var sNomes = ['José 1', 'Adair 2', 'Leonardo 3', 'Ana 4', 'Alana 5', 'Aline 6', 'Rosemery 7', 'Marcelo 8', 'Rafael 9',
    'Volnei 10', 'Felipe 11', 'Carlos 12', 'Juliano 13', 'Erick 14', 'Edianez 15', 'Debora 16', 'Danton 17', 'Silvia 18', 'Franciele 19', 'Andriely 20'];
  var iQtdReprovados = 0;
  var iQtdAprovados = 0;
  var iPercentReprovados;
  var iPercentAprovados;
  // situação de aprovação de cada aluno e as notas gerados aleatóriamente
  for (var i = 0; i < sNomes.length; i++) {
    var iNotas = jRandomNumeros(0, 100);
    var sAprovacao = ' ';
    if (iNotas < 60) {
      sAprovacao = 'Reprovado';
      // quantas pessoas foram reprovados
      iQtdReprovados += 1;
    } else {
      sAprovacao = 'Aprovado';
      //quantas pessoas foram aprovadas
      iQtdAprovados += 1;
    }
    //Adicionando os elementos coluna e linha no HTML
    var oTr = document.createElement('tr');
    var oTd1 = document.createElement('td');
    var oTd2 = document.createElement('td');
    var oTd3 = document.createElement('td');
    // adicionando os valores correspondentes aos nomes, notas e a situação
    oTd1.innerHTML = sNomes[i];
    oTd2.innerHTML = iNotas;
    oTd3.innerHTML = sAprovacao;
    // insere uma nova estrutura de tabela do DOM de um documento 
    oTr.appendChild(oTd1);
    oTr.appendChild(oTd2);
    oTr.appendChild(oTd3);
    //adicionar os trs no corpo do html
    document.getElementById('body-table').appendChild(oTr);
  }
  // descobrir a porcentagem de quantas pessoas foram reprovadas e quantas foram aprovados
  iPercentReprovados = iQtdReprovados * 100 / 20;
  iPercentAprovados = iQtdAprovados * 100 / 20;
  // criando as linhas e coluna das porcentagem 
  var oTr = document.createElement('tr');
  var oTd1 = document.createElement('td');
  var oTd2 = document.createElement('td');
  // adicionando no html do documento
  oTd1.innerHTML = ('REPROVADOS:' + iQtdReprovados + ' ' + '(' + iPercentReprovados + '%)');
  oTd2.innerHTML = ('APROVADOS:' + iQtdAprovados + ' ' + '(' + iPercentAprovados + '%)');
  // insere uma nova parte da tabela do DOM de um documento
  oTr.appendChild(oTd1);
  oTr.appendChild(oTd2);
  document.getElementById('foot-table').appendChild(oTr);

}
// gerar números aleatórios 

/**
 * Gerar números aleatórios inteiros de 0 a 100 para as notas dos alunos.
 * 
 * @param {integer} min 
 * @param {integer} max 
 * 
 * @returns {integer}
 */
function jRandomNumeros(min, max) {
  return Math.floor(Math.random() * 100);
}