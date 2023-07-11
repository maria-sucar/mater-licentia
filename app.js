
//MODAL FUNCTION
const openModal = document.querySelector("[data-open-modal]");
const closeModal = document.querySelector("[data-close-modal]");
const aboutDialog = document.querySelector("[data-modal]");

//abre o modal quando a pagina é carregada
document.addEventListener("DOMContentLoaded", function() {
  aboutDialog.showModal();
});


  openModal.addEventListener("click", () => {
    aboutDialog.showModal()
  } )
  closeModal.addEventListener("click", () => {
    aboutDialog.close()
  } )


// PENITENCIA FUNCTION 
const sendMessageButton = document.querySelector(".send-message-btn");
const messageContainer = document.querySelector(".message-container");
const penitenciaContainer = document.querySelector(".penitencia-container");
const penitencia = document.querySelector(".penitencia");
const iconContainer = document.querySelector(".icon-container");

let penitenciasLista = [
  'Se hidrate.',
  'Tenha uma boa noite de sono.',
  'Faça uma boa refeição.',
  'Tome um banho relaxante.',
  'Tome um banho de sol.'
]

let penitenciasListaEng = [
  'Drink water.',
  "Have a good night's sleep.",
  'Have a good meal.',
  'Take a relaxing shower.',
  'Take a sunbathe.'
  ]

function randomPenitencia() {
  if(siteLangInPortuguese) {
    return penitenciasLista[(Math.floor(Math.random() * penitenciasLista.length))];

  }else{
    return penitenciasListaEng[(Math.floor(Math.random() * penitenciasLista.length))];
  }
}

sendMessageButton.addEventListener('click', () => {
  messageContainer.style.display = 'none';
  penitenciaContainer.style.display = 'flex';
  iconContainer.style.display = 'none';

  let penitenciaEscolhida = randomPenitencia();
  penitencia.textContent = penitenciaEscolhida;


})





/*LANGUAGE TOGGLE*/

const portugueseBtn = document.querySelector(".pt-btn");
const englishBtn = document.querySelector(".eng-btn");
const ptbrElements = document.getElementsByClassName('ptbr');
const engElements = document.getElementsByClassName('eng');

let siteLangInPortuguese = true;

portugueseBtn.addEventListener('click', () => {
  for (var i = 0; i < ptbrElements.length; i++) {
    ptbrElements[i].style.display = 'block';
  }
  for (var j = 0; j < engElements.length; j++) {
    engElements[j].style.display = 'none';
  }

  siteLangInPortuguese = true;
})

englishBtn.addEventListener('click', () => {
  for (var i = 0; i < ptbrElements.length; i++) {
    ptbrElements[i].style.display = 'none';
  }
  for (var j = 0; j < engElements.length; j++) {
    engElements[j].style.display = 'block';
  }

  siteLangInPortuguese = false;
})