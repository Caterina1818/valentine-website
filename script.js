const STORAGE_KEY = "valentineName";

const nameForm = document.getElementById("name-form");
const nameInput = document.getElementById("name-input");
const formError = document.getElementById("form-error");

if (nameForm && nameInput && formError) {
  nameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const rawName = nameInput.value.trim();

    if (!rawName) {
      formError.textContent = "Per favore inserisci un nome.";
      nameInput.focus();
      return;
    }

    localStorage.setItem(STORAGE_KEY, rawName);
    window.location.href = "anteprima.html";
  });
}

const nameOutput = document.getElementById("name-output");
const previewNote = document.getElementById("preview-note");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const responseMessage = document.getElementById("response-message");

if (nameOutput && previewNote) {
  const savedName = localStorage.getItem(STORAGE_KEY);

  if (savedName) {
    nameOutput.textContent = savedName;
  } else {
    nameOutput.textContent = "Qualcuno di speciale";
    previewNote.textContent =
      "Torna alla pagina iniziale per inserire il nome.";
  }
}

if (yesButton && noButton && responseMessage) {
  yesButton.addEventListener("click", () => {
    responseMessage.textContent =
      "Sapevo che avresti detto sì! Ti aspetto con un abbraccio. 💖";
  });

  noButton.addEventListener("click", () => {
    responseMessage.textContent =
      "Nessun problema, possiamo renderlo ancora più speciale. ✨";
  });
}
