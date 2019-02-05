window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

const transcriptDOM = document.querySelector(".transcript");
const btnStart = document.querySelector(".actions__start");
const btnStop = document.querySelector(".actions__stop");

let newParagraph = document.createElement("p");
transcriptDOM.appendChild(newParagraph);

recognition.addEventListener("result", e => {

  let transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join("");

  newParagraph.textContent = transcript;

  if (e.results[0].isFinal) {
    nextParagraph = document.createElement("p");
    nextParagraph.textContent = transcript;
    transcriptDOM.appendChild(nextParagraph);
    newParagraph.textContent = "";
  }

});

btnStart.addEventListener("click", () => {
  btnStop.disabled = false;
  btnStart.disabled = true;

  recognition.start();

});

btnStop.addEventListener("click", () => {
  btnStop.disabled = true;
  btnStart.disabled = false;

  recognition.stop();

});
