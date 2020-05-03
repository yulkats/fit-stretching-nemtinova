const video = document
  .querySelector(".video-baner");
  
const btn = document
  .querySelector(".video-btn")
  .addEventListener("click", playerControl);

function playerControl() {
  video.paused ?  video.play() : video.pause();
}
