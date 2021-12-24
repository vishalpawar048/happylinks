// import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function WallText(THREE, scene, ) {
//   scene.background = new THREE.Color("#000");
//   camera.position.set(0.15, 0.45, 0.75);

  const light0 = new THREE.PointLight("white", 2, 2, 1);
  light0.position.set(0, 0, 1);
  scene.add(light0);

  const stub = new THREE.Texture();
  const sandGeom = new THREE.PlaneBufferGeometry(1, 1, 1e3, 1e3);
  const sandMat = new THREE.MeshStandardMaterial({
    map: stub,
    displacementMap: stub,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0,
  });
  const sandMesh = new THREE.Mesh(sandGeom, sandMat);
  scene.add(sandMesh);

  const man = {
    next: function next(gen) {
      new THREE.TextureLoader().load(
        gen.next().value,
        (tex) => {
          gsap
            .timeline({
              onComplete() {
                setTimeout(() => next(gen), 1e3);
              },
            })
            .to(sandMat, {
              displacementScale: 0,
              opacity: 0,
              duration: 0.5,
              ease: "none",
              onComplete() {
                sandMesh.scale.set(tex.image.width / tex.image.height, 1, 2);
                sandMat.map = tex;
                sandMat.displacementMap = tex;
              },
            })
            .to(sandMat, {
              displacementScale: 0.1,
              opacity: 1,
              duration: 3,
              ease: "elastic",
            });
          gsap
            .timeline()
            .set(sandMesh.rotation, { x: -Math.PI, y: Math.PI, duration: 1 })
            .to(sandMesh.rotation, { x: 0, y: 0, duration: 1 });
        },
        () => setTimeout(next, 1e3, gen)
      );
    },
    start() {
      this.next(this.Gen());
    },
    *Gen() {
      while (1)
        yield `https://source.unsplash.com/collection/11313199/?${Date.now()}`;
    },
  };
  man.start();
}
