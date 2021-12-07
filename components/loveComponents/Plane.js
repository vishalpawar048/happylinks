export default function Plane(THREE, scene) {
  const planeGeometry = new THREE.PlaneGeometry(1000, 1000);
  const planeMaterial = new THREE.MeshStandardMaterial({
    opacity: 0.25,
    transparent: true,
    // side: THREE.DoubleSide,
    depthWrite: false,
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -Math.PI / 2;
  plane.position.y = -100;
  plane.receiveShodow = true;
  scene.add(plane);
}
