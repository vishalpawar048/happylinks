import { Text } from "troika-three-text";
import { gsap } from "gsap";
export default function HeartText(THREE, scene, w, message) {
  const myText = new Text();
  const loader = new THREE.TextureLoader();

  console.log(w);
  // Set properties to configure:
  myText.text = message;
  myText.font = "/fonts/otf/Christian Sunday Italic.otf";
  myText.position.x = -10;
  myText.textAlign = "center";
  myText.anchorX = "center";
  // const material = new THREE.MeshBasicMaterial({
  //   map: loader.load("/textures/gold.jpg"),
  // });
  var material = new THREE.MeshBasicMaterial({
    map: loader.load("/textures/gold.jpg"),
    transparent: true,
    opacity: 0,
  });
  myText.material = material;
  myText.fontSize = w * 0.005;
  myText.maxWidth = 50;
  myText.rotation.y = Math.PI / 2;
  console.log(myText.fontSize);
  gsap.to(material, { duration: 15, opacity: 1 });
  scene.add(myText);
  // Update the rendering:
  myText.sync();
}
