import { Text } from "troika-three-text";
// PlayfairDisplay-Regular.ttf
export default function TextMsg(THREE, scene, w, message) {
  const myText = new Text();

  console.log(w);
  // Set properties to configure:
  myText.text = message;
  myText.font = "/fonts/otf/Christian Sunday Italic.otf";
  myText.position.x = -10;
  myText.textAlign = "center";
  myText.anchorX = "center";
  // const material = new THREE.MeshBasicMaterial({ color: "#fff" });
  
  myText.material = material;
  myText.material.opacity = 0.1;
  // myText.material.opacity = 0.5;
  myText.fontSize = w * 0.005;
  myText.maxWidth = 50;
  myText.rotation.y = Math.PI / 2;
 
  scene.add(myText);
  myText.to(material, 1, { opacity: 1 });

  myText.sync();
}
