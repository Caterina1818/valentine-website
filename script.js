const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const responseMessage = document.getElementById("response-message");
const card = document.querySelector(".card");

let yesScale = 1;

// Funzione per muovere il bottone No
function moveButton() {
  // Dimensioni della card e del bottone
  const cardRect = card.getBoundingClientRect();
  const btnRect = noButton.getBoundingClientRect();

  // Calcola un'area sicura all'interno della card (padding di 20px)
  const maxX = cardRect.width - btnRect.width - 40;
  const maxY = cardRect.height - btnRect.height - 40;

  // Genera coordinate random
  const randomX = Math.floor(Math.random() * maxX) + 20;
  const randomY = Math.floor(Math.random() * maxY) + 20;

  // Applica la posizione assoluta rispetto alla card
  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

// Funzione per ingrandire il bottone Sì
function growYesButton() {
  yesScale += 0.2; // Aumenta del 20% ogni volta
  yesButton.style.transform = `scale(${yesScale})`;
}

// Evento click sul Sì
yesButton.addEventListener("click", () => {
  responseMessage.innerHTML = "Sapevo che avresti detto sì! <br> Ti amo Aurora! 💖🐷";
  // Nascondi il bottone No quando dice sì
  noButton.style.display = "none";
  // Reset scala
  yesButton.style.transform = "scale(1)";
});

// Eventi per Desktop (Mouseover)
noButton.addEventListener("mouseover", () => {
  // Su desktop scappa appena ci passi sopra
  moveButton();
});

// Eventi per Mobile (Click/Touch)
// Usiamo 'click' che copre anche il tap su mobile
noButton.addEventListener("click", (e) => {
  // Previene il click effettivo (non fa nulla se non scappare)
  e.preventDefault();
  
  moveButton();
  growYesButton();
  
  // Messaggio opzionale divertente
  const messages = [
    "Sei sicura?",
    "Ripensaci...",
    "Daiii!",
    "Non puoi dirmi di no!",
    "Il tasto Sì è proprio lì!",
    "Ti pregooo 🥺"
  ];
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  responseMessage.textContent = randomMsg;
});
