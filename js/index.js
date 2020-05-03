const video = document
  .querySelector(".video-baner");
  
const btn = document
  .querySelector(".video-btn")
  .addEventListener("click", myFunction);

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
