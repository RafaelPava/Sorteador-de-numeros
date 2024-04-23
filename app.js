//lista dos números sorteados
let numerosSorteados = [];

//ao clicar no botão 'Sortear' ativa esta função que gerará números aleatórios de acordo com as informações passadas, chama as funções numeroSorteado() e exibirNaTela(), desativa o botão 'Sortear' e ativa o botão 'Reiniciar'
function sortear(){
    let qtdNumerosSortados = document.getElementById('quantidade').value;
    let numeroMinimoSorteado = parseInt(document.getElementById('de').value);
    let numeroMaximoSorteado = parseInt(document.getElementById('ate').value);
    numeroSorteado(qtdNumerosSortados,numeroMinimoSorteado,numeroMaximoSorteado);
    exibirNaTela('resultado',`Números sorteados: ${numerosSorteados}`);
    document.getElementById('btn-reiniciar').removeAttribute('disabled');
    document.getElementById('btn-sortear').setAttribute('disabled',true);
}

//função que pega a quantidade de números a serem sorteados, o mínimo e o máximo do intervalo passado, respectivamente, gera números pseudo-aleatórios e os adiciona à lista dos números sorteados
function numeroSorteado(quantidade, numMIN, numMax){
    while(quantidade>0){
        numerosSorteados.push(Math.round((Math.random()*(numMax-numMIN)))+numMIN);
        quantidade--;
        console.log(numMIN);
    }
}

//ao clicar no botão 'Reiniciar' ativa esta função que irá zerar a lista de números sorteados, desativar o botão 'Reiniciar' e reativar o botão 'Sortear'
function reiniciar(){
    exibirNaTela('resultado', 'Números sorteados: nenhum até agora');
    numerosSorteados=[];
    document.getElementById('btn-reiniciar').setAttribute('disabled',true);
    document.getElementById('btn-sortear').removeAttribute('disabled');
}

//função que exibe na tela os texto que são passados a ele, respectivamente o id do campo onde será exibido e o texto a ser exibido
function exibirNaTela(id, texto){
    let resultado = document.getElementById(id);
    resultado.innerHTML = texto;
}