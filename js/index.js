const video = document
  .querySelector(".video-baner");
  
const btn = document
  .querySelector(".video-btn")
  .addEventListener("click", playerControl);

function playerControl() {
  video.paused ?  video.play() : video.pause();
}

window.addEventListener("load", onLoad);

function onLoad() {
  document.querySelector("html").classList.add("smooth");
}

$(function () {
  $("body").animate({ scrollTop: "0px" });
});