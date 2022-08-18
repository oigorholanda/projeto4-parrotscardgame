//Perguntar e armazenar o numero de cartas
function iniciarJogo() {
let quantidade = prompt('Escolha uma quantidade par de cartas (2-14)');

//Armazenar o elemento lista na variavel modif
const modif = document.querySelector('.lista');
modif.innerHTML = "";
//Imprimir a lista com todas tarefas
    for (let i=0; i<quantidade; i++) {
    modif.innerHTML = modif.innerHTML + `
    <li onclick="FazerAcao(this)">
    <div class="carta">
        <img src="/img/front.png">
    </div>
    </li>
    `;
    }
}

//Marcar ou desmarcar a carta clicada
function FazerAcao (item) {
    item.classList.toggle('clicada');
}

// const itemPai = item.parentNode;
// itemPai.classList.toggle('verde');


//const lista = [];


// for (let i=0; i<x; i++) {
//     lista[i] = prompt('Digite a tarefa');
// }