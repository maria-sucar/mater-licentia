
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

let penitenciasLista = [
  'Beba 2 litros de água durante o dia.',
  'Essa noite, tenha 8 horas de sono.',
  'Faça uma boa refeição.',
  'Tome um banho relaxante.',
  'Pegue 10 minutos de sol.'
]

let penitenciasListaEng = [
  'Drink 2 liters of water.',
  'Get 8 hours of sleep tonight.',
  'Have a good meal.',
  'Take a relaxing shower.',
  'Get 10 minutes of sunlight.'
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