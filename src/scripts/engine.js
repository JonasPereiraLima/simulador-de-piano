const volume = document.querySelector("input#volume");
const showedKeys = document.querySelector("input#showedKeys");
const pianoKeys = document.querySelectorAll(".piano-keys .key");
let audio = new Audio();
const mapedKeys = [];

pianoKeys.forEach((key) => {
  key.addEventListener("click", () => {
    playTune(key.dataset.key);
  });
  mapedKeys.push(key.dataset.key);
});

function playAudio(key) {
  audio.volume = volume.value / 100;
  audio.src = `src/tunes/${key}.wav`;
  audio.play();
}

let playTune = (key) => {
  playAudio(key);

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

document.addEventListener("keydown", (e) => {
  if (mapedKeys.includes(e.key)) playTune(e.key);
});

showedKeys.addEventListener("change", (e) => {
  setTimeout(() => {
    showHideKeys(e);
  }, 300);
});

function showHideKeys(event) {
  pianoKeys.forEach((key) => {
    event.target.checked
      ? (key.textContent = key.dataset.key)
      : (key.textContent = "");
  });
}
