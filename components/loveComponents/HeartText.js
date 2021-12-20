import { Text } from "troika-three-text";
// PlayfairDisplay-Regular.ttf
export default function HeartText(THREE, scene, w, message) {
  const myText = new Text();
  const loader = new THREE.TextureLoader();
  scene.add(myText);
  console.log(w);
  // Set properties to configure:
  myText.text = message;
  myText.font = "/fonts/otf/Christian Sunday Italic.otf";
  myText.position.x = -10;
  myText.textAlign = "center";
  myText.anchorX = "center";
  const material = new THREE.MeshBasicMaterial({
    map: loader.load("/textures/gold.jpg"),
  });
  myText.material = material;
  myText.fontSize = w * 0.005;
  myText.maxWidth = 50;
  myText.rotation.y = Math.PI / 2;
  console.log(myText.fontSize);

  // Update the rendering:
  myText.sync();
}
