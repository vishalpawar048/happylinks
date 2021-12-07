
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
