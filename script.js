const sons = [
  "aiaiai",
  "cavalo",
  "danca_gatinho_danca",
  "demais",
  "e_brincadeira_ein",
  "ele_gosta",
  "irra",
  "pare",
  "tomi",
  "ui",
  "xiii",
];

sons.forEach((som) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = som;

  btn.addEventListener("click", () => {
    stopSongs();

    document.getElementById(som).play();
  });

  document.getElementById("botao").appendChild(btn);
});

function stopSongs() {
  sons.forEach((som) => {
    const song = document.getElementById(som);

    song.pause();
    song.currentTime = 0;
  });
}
