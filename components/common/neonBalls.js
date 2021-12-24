// global.window = window;
// import { GUI } from "dat.gui";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm//postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm//postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm//postprocessing/ShaderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import fragmentshader from "raw-loader!glslify-loader!../../public/shaders/fragmentshader.glsl";
import vertexshader from "raw-loader!glslify-loader!../../public/shaders/vertexshader.glsl";

export default function NeonBalls(THREE, scene, camera, renderer, window) {
  //   renderer.autoClear = false;
  //bloom renderer
  const renderScene = new RenderPass(scene, camera);
  //   renderer.toneMapping = THREE.ReinhardToneMapping;
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0.4,
    0.85
  );
  bloomPass.threshold = 0;
  bloomPass.strength = 1; //intensity of glow
  bloomPass.radius = 0;
  const bloomComposer = new EffectComposer(renderer);
  bloomComposer.setSize(window.innerWidth, window.innerHeight);
  //   bloomComposer.renderToScreen = true;
  bloomComposer.addPass(renderScene);
  bloomComposer.addPass(bloomPass);
  //   //sun object
  const color = new THREE.Color("#FDB813");
  const geometry = new THREE.IcosahedronGeometry(1, 15);
  const material = new THREE.MeshBasicMaterial({ color: color });
  const sphere = new THREE.Mesh(geometry, material);
  sphere.position.set(0, 0, 0);
  sphere.layers.set(0);
  scene.add(sphere);
  //   //ambient light
  const ambientlight = new THREE.AmbientLight(0xffffff, 0.1);
  scene.add(ambientlight);
  //   //   animation loop
  //   const animate = () => {
  //     // requestAnimationFrame(animate);
  //     // // starMesh.rotation.y += 0.001;
  //     // camera.layers.set(0);
  //     // bloomComposer.render();
  //     requestAnimationFrame(animate);

  //     // renderer.autoClear = false;
  //     // renderer.clear();
  //     // camera.layers.set(1);
  //     bloomComposer.render(scene, camera);
  //     // renderer.clear();
  //     // bloomComposer.render(deltaTime);
  //     // renderer.clearDepth();
  //     // camera.layers.set(0);
  //     // renderer.render(scene, camera);
  //   };
  //   animate();
  return bloomComposer;
}
