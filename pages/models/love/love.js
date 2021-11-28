// export default function Home({ allPostsData }) {
//     return <div>Hello Love.......</div>;
//   }

import * as THREE from "three";
import { useEffect, useState } from "react";
// import { FontLoader } from "../node_modules/three/examples/jsm/loaders/FontLoader";
// import { GUI } from "three/examples/jsm/libs/dat.gui.module";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

// import cake from "./assets/cake3d.glb";
// import donald from "./assets/donald.glb";
// import plane from "./assets/plane.glb";
import Particles from "./loveComponents/Particles";
import Skybox from "./loveComponents/Skybox";
// import heart from "./assets/heart.glb";
import Plane from "./loveComponents/Plane";
// import Drawer from "./components/Drawer";
import TextMsg from "./loveComponents/Text";
// import loadingManager from "./components/Loader";

// import CharacterControls from "../../../components/loveComponents/components/Character";
// import MaleCharacter from "./assets/MaleCharacter.glb";
import { KeyDisplay } from "./loveComponents/utils";

function Love() {
  // const gui = new GUI();
  // useEffect(() => {
  //   const canvas = document.querySelector("#canvas");
  //   const renderer = new THREE.WebGLRenderer({ canvas });

  //   const fov = 75;
  //   const aspect = 2; // the canvas default
  //   const near = 0.1;
  //   const far = 5;
  //   const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  //   camera.position.z = 2;

  //   const scene = new THREE.Scene();

  //   // const boxWidth = 1;
  //   // const boxHeight = 1;
  //   // const boxDepth = 1;
  //   // const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  //   // const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 }); // greenish blue

  //   // const cube = new THREE.Mesh(geometry, material);
  //   Particles(THREE, scene, renderer, camera);
  //   // Skybox(THREE, scene);
  //   // scene.add(cube);

  //   renderer.render(scene, camera);
  // }, []);

  useEffect(() => {
    var w = window.innerWidth;
    var h = window.innerHeight;

    const canvas = document.querySelector("#canvas");
    console.log(">>>.>>..", canvas);
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.outputEncoding = THREE.sRGBEncoding;

    let planeMixer;
    let donaldDanceMixer;
    let heartMixer;

    const fov = 80;
    const aspect = 2; // the canvas default
    const near = 1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(20, 2, 0);
    camera.rotateY = 100;

    const scene = new THREE.Scene();
    let lightProbe = new THREE.LightProbe();
    scene.add(lightProbe);

    // new OrbitControls(camera, renderer.domElement);
    // CONTROLS
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;
    orbitControls.minDistance = 5;
    orbitControls.maxDistance = 15;
    orbitControls.enablePan = false;
    orbitControls.maxPolarAngle = Math.PI / 2 - 0.05;
    orbitControls.update();
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    scene.add(directionalLight);
    // Plane(THREE, scene);
    Particles(THREE, scene, renderer, camera);
    Skybox(THREE, scene);

    // const loader = new GLTFLoader(loadingManager);

    // loader.load(
    //   heart,
    //   function (gltf) {
    //     let model = gltf.scene;
    //     model.position.set(0, -5, 0);
    //     renderer.outputEncoding = true;
    //     gltf.scene.scale.set(100, 100, 100);
    //     // const listener = new THREE.AudioListener();
    //     // camera.add(listener);
    //     scene.add(model);
    //     heartMixer = new THREE.AnimationMixer(model);
    //     heartMixer.clipAction(gltf.animations[0]).play();
    //     // addDonald();
    //     // addPlane();
    //     render();
    //   },
    //   function (progress) {
    //     // console.log("% loaded", xhr);
    //   },
    //   function (error) {
    //     console.log("error");
    //   }
    // );

    const light = new THREE.PointLight(0xff0000, 1, 100);
    light.position.set(5, 5, 0);
    scene.add(light);

    let addDonald = () => {
      loader.load(
        donald,
        function (gltf) {
          let model = gltf.scene;
          model.position.set(0, -10, 0);
          model.rotation.set(0, 1.5, 0);
          scene.add(model);
          donaldDanceMixer = new THREE.AnimationMixer(model);

          donaldDanceMixer.clipAction(gltf.animations[0]).play();
          render();
        },
        function (progress) {
          // console.log("% loaded", xhr);
        },
        function (error) {
          console.log(error);
        }
      );
    };

    // MODEL WITH ANIMATIONS
    var characterControls;

    const clock = new THREE.Clock();
    const render = () => {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      const delta = clock.getDelta();

      if (donaldDanceMixer) {
        donaldDanceMixer.update(delta);
      }
      if (planeMixer) {
        planeMixer.update(delta);
      }
      if (heartMixer) {
        heartMixer.update(delta * 0.25);
      }

      if (characterControls) {
        characterControls(delta, keysPressed);
      }
      orbitControls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(render);

      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
    };
    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }
    render();
  }, []);

  let canvasStyle = {
    width: "100%",
    height: "100%",
    display: "block",
    backgroundColor: "#bfe3dd",
  };
  return (
    <div className="love">
      <canvas
        id="canvas"
        style={canvasStyle}
        // width={640}
        // height={425}
      />
    </div>
  );
}

export default Love;
