import { Text } from "troika-three-text";

export default function TextMsg(THREE, scene, w, message) {
  const myText = new Text();
  scene.add(myText);
  console.log(w);
  // Set properties to configure:
  myText.text = message;
  myText.font = "/fonts/otf/Christian Sunday Italic.otf";
  myText.position.x = -10;
  myText.textAlign = "center";
  myText.anchorX = "center";
  const material = new THREE.MeshBasicMaterial({ color: "#fff" });
  myText.material = material;
  // myText.material.opacity = 0.5;
  myText.fontSize = w * 0.005;
  myText.maxWidth = 50;
  myText.rotation.y = Math.PI / 2;
  // var center = new THREE.Vector3();
  // myText.geometry.computeBoundingBox();
  // myText.geometry.boundingBox.getCenter(center);
  // myText.geometry.center();
  // myText.position.copy(center);
  console.log(myText.fontSize);

  // Update the rendering:
  myText.sync();
}
