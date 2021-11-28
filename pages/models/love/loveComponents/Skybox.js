// import posx from "../assets/Skyboxs/posx.jpg";
// import negx from "../assets/Skyboxs/negx.jpg";
// import posy from "../assets/Skyboxs/posy.jpg";
// import negy from "../assets/Skyboxs/negy.jpg";
// import posz from "../assets/Skyboxs/posz.jpg";
// import negz from "../assets/Skyboxs/negz.jpg";
import loadingManager from "./Loader";

export default function Skybox(THREE, scene) {
  const loader = new THREE.CubeTextureLoader(loadingManager);
  const posx = "/assets/love/Skyboxs/posx.jpg";
  const negx = "/assets/love/Skyboxs/negx.jpg";
  const posy = "/assets/love/Skyboxs/posy.jpg";
  const negy = "/assets/love/Skyboxs/negy.jpg";
  const posz = "/assets/love/Skyboxs/posz.jpg";
  const negz = "/assets/love/Skyboxs/negz.jpg";
  const texture = loader.load([posx, negx, posy, negy, posz, negz]);

  scene.background = texture;
}
