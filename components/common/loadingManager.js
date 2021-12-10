import * as THREE from "three";
export default function LoadingManager(document) {
  const loadingManager = new THREE.LoadingManager(() => {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen ? loadingScreen.classList.add("fade-out") : "";

    loadingScreen
      ? loadingScreen.addEventListener("transitionend", onTransitionEnd)
      : "";
  });

  function onTransitionEnd(event) {
    const element = event.target;
    element.remove();
  }
  return loadingManager;
}
