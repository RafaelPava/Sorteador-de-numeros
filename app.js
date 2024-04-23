let numerosSorteados = [];

function sortear(){
    let qtdNumerosSortados = document.getElementById('quantidade').value;
    let numeroMinimoSorteado = parseInt(document.getElementById('de').value);
    let numeroMaximoSorteado = parseInt(document.getElementById('ate').value);
    numeroSorteado(qtdNumerosSortados,numeroMinimoSorteado,numeroMaximoSorteado);
    exibirNaTela('resultado',`Números sorteados: ${numerosSorteados}`);
    document.getElementById('btn-reiniciar').removeAttribute('disabled');
    document.getElementById('btn-sortear').setAttribute('disabled',true);
}

function numeroSorteado(quantidade, numMIN, numMax){
    while(quantidade>0){
        numerosSorteados.push(Math.round((Math.random()*(numMax-numMIN)))+numMIN);
        quantidade--;
        console.log(numMIN);
    }
}

function reiniciar(){
    exibirNaTela('resultado', 'Números sorteados: nenhum até agora');
    numerosSorteados=[];
    document.getElementById('btn-reiniciar').setAttribute('disabled',true);
    document.getElementById('btn-sortear').removeAttribute('disabled');
}

function exibirNaTela(id, texto){
    let resultado = document.getElementById(id);
    resultado.innerHTML = texto;
}