const sounds = ["applause", "boo", "gasp"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    // Stop all songs before playing the selected one
    stopSongs();

    document.getElementById(sound).play();
  });

  document.getElementById("btns-container").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
