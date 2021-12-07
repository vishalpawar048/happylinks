import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
// import snowImg from "/snow.png";
// import heart from "/public/heart.png";

export default function Particles(THREE) {
  //Snow

  const partclesGeometry = new THREE.BufferGeometry();
  const particlesCount = 3000;
  const loader = new THREE.TextureLoader();

  const snow = loader.load("/assets/love/snow.png");
  // cretes 5 * 3 particles array
  const posArray = new Float32Array(particlesCount * 3);
  //assigns x,y, z position values
  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 150;
  }
  const particleMaterial = new THREE.PointsMaterial({
    size: 0.5,
    map: snow,
    transperent: true,
    color: 0xffffff,
  });
  particleMaterial.alphaTest = 0.5;
  //sets positions as per posArray of each particles
  partclesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(posArray, 3)
  );
  const partclesMesh = new THREE.Points(partclesGeometry, particleMaterial);
  //Hearts
  //Snow
  const heartGeometry = new THREE.BufferGeometry();
  const heartsCount = 500;
  // const loader = new THREE.TextureLoader();
  const hearts = loader.load("/assets/love/heart.png");
  //cretes 5 * 3 particles array
  const heartsPosArray = new Float32Array(heartsCount * 3);
  //assigns x,y, z position values
  for (let i = 0; i < heartsCount * 3; i++) {
    heartsPosArray[i] = (Math.random() - 0.5) * 150;
  }
  const heartMaterial = new THREE.PointsMaterial({
    size: 1,
    map: hearts,
    transperent: true,
    color: 0xffffff,
  });
  //this removes background
  heartMaterial.alphaTest = 0.5;
  //sets positions as per posArray of each particles
  heartGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(heartsPosArray, 3)
  );
  const heartMesh = new THREE.Points(heartGeometry, heartMaterial);
  return { partclesMesh, heartMesh };
  // scene.add(partclesMesh, heartMesh);
  // /**
  //  * Animate
  //  */
  // const clock = new THREE.Clock();
  // const tick = () => {
  //   const elapsedTime = clock.getElapsedTime();
  //   // sphere.rotation.y = 0.5 * elapsedTime;
  //   partclesMesh.position.y = -elapsedTime;
  //   heartMesh.position.y = -elapsedTime;
  //   renderer.render(scene, camera);
  //   window.requestAnimationFrame(tick);
  // };
  // messege && tick();
}
