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
// I wanted to keep the 'pause,play' feature becasue as its an audio based media player, this is the
// only way in which the users can interact with the music on the webpage.

function toggleReplay() {
    audio.currentTime = 0;
    audio.play()
    // if (audio.ended) {
    //     audio.play();
    //     replayImg.src = "icons8-replay-30.png";
    // }
}
// I had a lot of trouble with this code, I undertook many attempts to implement this function in the code. My frist attempt, was using the same strategy
// as the play pause button however, through trial and error and asking many questions using the 'current.Time' code
// was a better choice, as this allows for the user to replay the song at any point throughout the played song, rather than having to 
// reload the page each time. I find that I personally would use this feature on websites and have previously done so. 
// That was the main reason as to why I wanted to add in the 'Replay' button onto this media player. 

document.addEventListener('DOMContentLoaded', () => {
    // const audio = document.replayBtn('audio');
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
// I wanted to keep the progress bar because, regardless if you are studying or not, majority of people 
// like to see where they are throughout the song. However for this circumstance, being that it is a media player,
// for those who are wanting to relax or study, it is a small and minor movement on the screen that doesnt 
// detract attention from whatever the user is trying to maintain.

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

const muteUnmuteIcon = document.querySelector("#mute-unmute-icon");
console.log(muteUnmuteIcon);

muteUnmuteButton.addEventListener("click", toggleSound);
// const muteUnmuteImg = document.querySelector("#mute-unmute-img");

//to mute the video we check if it is already muted or not, if not
//mute it or unmute it.
function toggleSound() {
    if (audio.muted) {
      muteUnmuteButton.style.backgroundColor = "#d5cea3";
      muteUnmuteIcon.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
      audio.muted = false;
    } else {
        muteUnmuteButton.style.backgroundColor = "#8879bd";
        muteUnmuteIcon.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
        audio.muted = true;
    }
  }
const increaseVolumeButton = document.querySelector("#increase-volume-btn");
increaseVolumeButton.addEventListener("click", increaseVolume);
// Event listener to increase volume on clicking the button