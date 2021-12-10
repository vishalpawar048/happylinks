import React, { useEffect } from "react";
import * as THREE from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import LoadingManager from "../common/loadingManager";

const DonaldCanvas = (props) => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const fov = 80;
    const aspect = 2; // the canvas default
    const near = 1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    const canvas = document.querySelector("#homeCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.outputEncoding = THREE.sRGBEncoding;
    let lightProbe = new THREE.LightProbe();
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    scene.add(lightProbe);
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;
    orbitControls.minDistance = 5;
    orbitControls.maxDistance = 15;
    orbitControls.enablePan = false;
    orbitControls.enableZoom = false;
    // orbitControls.maxPolarAngle = Math.PI / 2 - 0.05;
    orbitControls.update();

    let donaldDanceMixer;
    let heartMixer;
    const loadingManager = LoadingManager(document);
    const loader = new GLTFLoader(loadingManager);
    renderer.outputEncoding = THREE.sRGBEncoding;
    // const axesHelper = new THREE.AxesHelper();
    // scene.add(axesHelper);
    scene.background = new THREE.Color(0xffffff);
    let addDonald = () => {
      loader.load(
        "assets/love/donald.glb",
        function (gltf) {
          console.log("gltf", gltf);
          let model = gltf.scene;
          model.position.set(0, 0, 1);
          model.rotation.set(-1.5, 0, 0);
          gltf.scene.scale.set(2.2, 2.2, 2.2);

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

    // loader.load(
    //   "/assets/love/heart.glb",
    //   function (gltf) {
    //     let model = gltf.scene;
    //     model.position.set(0, -5, 0);
    //     renderer.outputEncoding = true;
    //     gltf.scene.scale.set(10, 10, 10);
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

    const clock = new THREE.Clock();
    const render = () => {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      const delta = clock.getDelta();
      if (donaldDanceMixer) {
        donaldDanceMixer.update(delta);
      }

      //   if (heartMixer) {
      //     heartMixer.update(delta * 0.25);
      //   }
      orbitControls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(render);

      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
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
    };
    addDonald();
  }, []);

  let canvasStyle = {
    width: "100%",
    height: "100%",
    display: "block",
    // backgroundImage: url("paper.gif"),
    backgroundColor: "#cccccc",
  };
  return (
    <div className="homeCanvas1">
      <section id="loading-screen">
        <div id="loader"></div>
      </section>
      <canvas id="homeCanvas" style={canvasStyle} />
    </div>
  );
};

export default DonaldCanvas;
