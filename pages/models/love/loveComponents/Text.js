import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

export default function TextMsg(THREE, scene, msg) {
  const fontLoader = new FontLoader();

  fontLoader.load("/fonts/helvetiker_regular.typeface.json", (font) => {
    // Material
    // console.log("--------font", font);
    const matDark = new THREE.LineBasicMaterial({
      color: "red",
      side: THREE.DoubleSide,
    });
    let textMsg = msg;
    console.log(".....textMsg", textMsg);
    const shapes = font.generateShapes(textMsg, 5);

    const geometry = new THREE.ShapeGeometry(shapes);

    const text = new THREE.Mesh(geometry, matDark);
    text.position.x = -10;
    text.position.y = -5;
    scene.add(text);
  });
}
