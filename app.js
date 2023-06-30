
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
  'Beba 2 litros de água.',
  'Essa noite, tenha 8 horas de sono.',
  'Faça uma boa refeição.',
  'Tome um banho relaxante.',
  'Pegue 10 minutos de sol.'
]

function randomPenitencia() {
  return penitenciasLista[(Math.floor(Math.random() * penitenciasLista.length))];
}

sendMessageButton.addEventListener('click', () => {
  messageContainer.style.display = 'none';
  penitenciaContainer.style.display = 'flex';

  let penitenciaEscolhida = randomPenitencia();
  penitencia.textContent = penitenciaEscolhida;


})