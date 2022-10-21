var oCriar = document.getElementById("oCriar");
var iCount = 1;
var sQuadrados;
oCriar.onclick = function () {
    // chamando a função de cores aleatórias
    let cor = jRandomCor();
    // chamando a função de posições aleatórias
    let pos_top = randomIntFromInterval(1, 930);
    let pos_left = randomIntFromInterval(1, 1900);
    // adicionando e criando os quadrados,a cor aleatória ,posição aleatoria e a quantidade de quadrados
    let sQuadrado = `<div id="quadrado-${iCount}" style="width: 20px;height: 20px; background-color:${cor};top: ${pos_top}px;left: ${pos_left}px;position: absolute;float: right;z-index: 10;" class="quadrado"></div>`;
    // document.creatRange retorna um novo range,que é uma função que recebe um índice inicial e um índice final e retorna uma lista de todos os inteiros do início ao fim.
    // creatContextualFragment ajuda a analizar uma string de texto do HTML
    let fragment = document.createRange().createContextualFragment(sQuadrado);
    // selecionando a class da pagina HTML e o append insere um conjunto de Nodeobjetos ou objetos string após o último filho do Element.
    document.querySelector('.container').append(fragment);
    iCount++;
    // retorna o elemento indicado na class na pagina HTML
    sQuadrados = document.getElementsByClassName('quadrado');
    for(var i = 0; i < sQuadrados.length; i++){
        // quando clicado no quadrado aparecera uma mensagem 
        sQuadrados[i].onclick = function(){
            // window.confirme exibe uma caixa de diálogo com uma mensagem à qual o usuário precisa responder.
            if (window.confirm("Você deseja excluir?")) {
                try {
                    // referenciando os quadrados[i]
                   this.remove();
                } catch (e) {
                    console.log('deu erro');
                }
            } else {
                console.log('Não Excluir');
            }
        }
        //em cada quadrado que o mouser passar por cima deve aparecer como um objeto clicavel, a mãozinha
        sQuadrados[i].onmouseover = function(){
            //Em JavaScript, a palavra this chave faz referencia a um objeto
            // esta referenciando os quadrados[i] echamando a função de cores aleatórias
            this.style.backgroundColor = jRandomCor();
            
        }
    }
}
// resetar as quadrados todos de uma vez 
var oResetar = document.getElementById("oResetar");
// onclick executa uma função quando clicarmos no elemento
oResetar.onclick = function () {
    // retorna o elemento indicado na class na pagina HTML
    elements = document.getElementsByClassName('quadrado');
    for (var i = elements.length - 1; i >= 0; i--) {
        //caso ocorra um problema no código do bloco try a execução sera desviada para o bloco catch
        try {
            // remover os quadrados
            elements[i].remove();
        } catch (e) {
            console.log('deu erro');
        }
    }
}


/**
 * gerar cores aleatóriamente para os quadrados
 * 
 * @returns  {String} 
 */
function jRandomCor() {
    return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

/**
 * função de posição aleatória dos quadrados na tela
 * 
 * @param {integer} min 
 * @param {integer} max 
 * 
 * @returns {integer}
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

