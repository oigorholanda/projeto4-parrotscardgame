const gifs = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];
let numCartas = 1;
let cliques = 0;
let indice1;
let indice2;
let primeiraCarta;
let segundaCarta;
let acertos = 0;
let temp = 0;
let Cronid;


//Perguntar e gerar o numero de cartas
function iniciarJogo() {
    while ((numCartas % 2 !== 0 || numCartas < 4 || numCartas > 20)) {
        numCartas = prompt('Escolha uma quantidade PAR de cartas entre 4 e 20');
    }
    //Igualar os gifs ao numero de cartas
    gifs.length = numCartas;
    //Embaralhar os gifs
    gifs.sort(comparador);
    //Armazenar o elemento lista na variavel lista e limpa o html da lista
    const lista = document.querySelector('.lista');
    lista.innerHTML = "";
    lista.innerHTML = `<div class="cronometro"></div>`

    //Insere as cartas formatadas com gifs 2 a 2
    for (let i = 0; i < numCartas; i++) {
        lista.innerHTML += `
    <li onclick="virarCarta(this)">
    <div id=${gifs[i]} class="card">
        <div class="carta">
            <img src="./img/front.png" alt="">
        </div>
        <div class="carta frente">
            <img src="./gif/${gifs[i]}.gif" alt="">
        </div>
    </div>
    </li> 
    `;
    }
    iniciaCronometro();
}

// Função para o embaralhador
function comparador() {
    return Math.random() - 0.5;
}

function iniciaCronometro() {
    Cronid = setInterval(atualizaCronometro, 1000);
}

function atualizaCronometro() {
    const cron = document.querySelector('.cronometro')
    cron.innerHTML = `${temp++}s`;
}


//Virar somente a carta clicada e armazenar ID
function virarCarta(item) {

    if (item.classList.contains('clicada')) {
        return;

    } else if (primeiraCarta === undefined) {
        primeiraCarta = item;
        indice1 = item.querySelector('div').id;
        item.classList.add('clicada');
        console.log(indice1);
        cliques++;

    } else if (segundaCarta === undefined) {
        segundaCarta = item
        indice2 = item.querySelector('div').id;
        item.classList.add('clicada');
        console.log(indice2);
        cliques++;

        compararCartas();
    }
}

//Compara os cards e define o acerto ou reset
function compararCartas() {
    if (indice1 === indice2) {
        console.log('Acertou');

        contadorDeAcertos();

    } else {
        console.log('Errou');

        setTimeout(removerClasse, 1500);
    }
}

//Desvira o card em caso de erro
function removerClasse() {
    primeiraCarta.classList.remove('clicada');
    segundaCarta.classList.remove('clicada');
    primeiraCarta = undefined;
    segundaCarta = undefined;
}

//Conta os acertos e finaliza o jogo
function contadorDeAcertos() {
    acertos++;
    primeiraCarta = undefined;
    segundaCarta = undefined;

    if (acertos >= numCartas / 2) {
        clearInterval(Cronid);
        setTimeout(finalizarJogo, 1000)
    }
}

function finalizarJogo() {
    alert(`
Yaay, você ganhou com ${cliques} jogadas e ${temp} segundos, parabéns!

Veja como os papagaios estão felizes... 🦜🎉`);

    if (confirm("Deseja jogar novamente?")) {
        window.location.reload();
    }
}