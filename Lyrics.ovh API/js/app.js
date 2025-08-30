const apiUrl = `https://api.lyrics.ovh/v1/artist/title`;

const artistInput = document.querySelector(".input-artist");
const songInput = document.querySelector(".input-song");
const button = document.querySelector(".find-btn");
const songDescription = document.querySelector(".song-desc");
const lyricField = document.querySelector(".lyric-text");
const errorBox = document.querySelector(".error-box");

button.addEventListener("click", (e) => {
  e.preventDefault();
});

function getLyricy() {
  const artistValue = artistValue.value;
  const songValue = songValue.value;

  if (artistValue.trim() === "" || songValue.trim() === "") {
    errorBox.style.display = "block";
  }
}
