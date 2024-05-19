const audio = document.querySelector("#custom-audio-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const replayBtn = document.querySelector("replay-btn");
const replayImg = document.querySelector("replay-img");
const progressBar = document.querySelector("#progress-bar-fill");
audio.removeAttribute("controls");
// playPauseBtn.addEventListener("click", togglePlayPause);
audio.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (audio.paused || audio.ended) {
    audio.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    audio.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function toggleReplay() {
    if (audio.ended) {
        audio.play();
        replayImg.src = "icons8-replay-30.png";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const audio = document.replayBtn('audio');
    const replayButton = document.replayBtn('replayButton');

    replayButton.addEventListener('click', () => {
        audio.currentTime = 0; // Reset audio to the beginning
        audio.play(); // Play the audio
    });
});

function updateProgressBar() {
  const value = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = value + "%";
}
// Add other functionalities here