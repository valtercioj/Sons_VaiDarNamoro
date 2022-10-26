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

// const faro1 = document.getElementById("faro1");
// const faro2 = document.getElementById("faro2");
// const case2 = document.getElementById("case2");

// case2.addEventListener("click", () => {
//   document.getElementById("xiii").play();
// });

const playImg = (msc) => {
  document.getElementById(msc).play();
};
