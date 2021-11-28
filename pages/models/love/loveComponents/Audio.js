import FullScreen from "./FullScreen";
import audioFile from "../models/Audio/happyBirthday.mp3";
const startButton = document.getElementById("startButton");
const canvas = document.querySelector("#canvas");
startButton.addEventListener("click", function () {
  let audio = new Audio(audioFile);
  audio
    .play()
    .then((res) => {
      FullScreen(canvas);
    })
    .catch((e) => {
      console.log(e);
    });
});
