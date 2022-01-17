import * as THREE from "three";
import { useEffect, useState } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Particles from "../../../components/loveComponents/Particles";
import Skybox from "../../../components/loveComponents/Skybox";
import TextMsg from "../../../components/loveComponents/Text";
import LoadingManager from "../../../components/common/loadingManager";
import HeartText from "../../../components/loveComponents/HeartText";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import fullScreen from "../../../components/common/fullScreen";
import NeonBalls from "../../../components/common/neonBalls";

export default function Scene({ type, messege }) {
  const [deviceHeight, setdeviceHeight] = useState("");
  const scene = new THREE.Scene();
  const fov = 80;
  const aspect = 2; // the canvas default
  const near = 1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(20, 2, 0);
  camera.rotateY = 100;

  function handleScroll() {
    console.log("document.body.offsetHeight", document.body.offsetHeight);
    window.scroll({
      top: 500,
      left: 0,
      behavior: "smooth",
    });
  }

  function handleFullscreen() {
    fullScreen(window);
  }
  useEffect(() => {
    var w = window.innerWidth;

    var h = window.innerHeight;
    setdeviceHeight(h);
    const canvas = document.querySelector("#canvas");
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.outputEncoding = THREE.sRGBEncoding;

    let planeMixer;
    let donaldDanceMixer;
    let heartMixer;

    let lightProbe = new THREE.LightProbe();
    scene.add(lightProbe);

    // new OrbitControls(camera, renderer.domElement);
    // CONTROLS
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;
    orbitControls.minDistance = 5;
    orbitControls.maxDistance = 15;
    orbitControls.enablePan = false;
    orbitControls.enableZoom = false;
    orbitControls.maxPolarAngle = Math.PI / 2 - 0.05;
    orbitControls.update();

    const loadingManager = LoadingManager(document);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    scene.add(directionalLight);
    // Plane(THREE, scene);
    let { partclesMesh, heartMesh } = Particles(THREE);
    Skybox(THREE, scene, loadingManager);
    scene.add(partclesMesh, heartMesh);
    // TextMsg(THREE, scene, messege, loadingManager);
    // TextMsg(THREE, scene, w, messege);
    HeartText(THREE, scene, w, messege);
    // let bloomComposer = NeonBalls(THREE, scene, camera, renderer, window);

    // const loader = new GLTFLoader(loadingManager);

    const loader = new GLTFLoader(loadingManager);

    loader.load(
      "/assets/love/heart.glb",
      function (gltf) {
        let model = gltf.scene;
        model.position.set(0, -5, 0);
        renderer.outputEncoding = true;
        gltf.scene.scale.set(100, 100, 100);
        // const listener = new THREE.AudioListener();
        // camera.add(listener);
        scene.add(model);
        heartMixer = new THREE.AnimationMixer(model);
        heartMixer.clipAction(gltf.animations[0]).play();
        // addDonald();
        // addPlane();
        messege && render();
      },
      function (progress) {
        // console.log("% loaded", xhr);
      },
      function (error) {
        console.log("error");
      }
    );

    const light = new THREE.PointLight(0xff0000, 1, 100);
    light.position.set(5, 5, 0);
    scene.add(light);

    const clock = new THREE.Clock();
    const render = () => {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      if (donaldDanceMixer) {
        donaldDanceMixer.update(delta);
      }
      if (planeMixer) {
        planeMixer.update(delta);
      }
      if (heartMixer) {
        heartMixer.update(delta * 0.25);
      }
      partclesMesh.position.y = -elapsedTime;
      heartMesh.position.y = -elapsedTime;
      orbitControls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(render);

      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
      camera.layers.set(0);
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
    if (messege) {
      render();
    }
  }, [messege]);

  let modelStyle = {
    width: "100%",
    height: deviceHeight - 100 + "px",
    backgroundColor: "#bfe3dd",
    overflow: "hidden",
  };

  let experienceStyle = {
    width: "100%",

    height: deviceHeight + "px",
    backgroundColor: "#bfe3dd",
    overflow: "hidden",
    position: "fixed",
    top: 0,
    left: 0,
    outline: "none",
  };

  return (
    <div className="love" style={{ overflow: "hidden" }}>
      <section id="loading-screen">
        <div id="loader"></div>
      </section>
      <canvas
        id="canvas"
        style={type == "model" ? modelStyle : experienceStyle}
      />
      {type == "model" ? (
        <KeyboardArrowDownIcon
          style={{
            fontSize: "50px",
            color: "gray",
            bottom: "50px",
            left: 0,
            position: "absolute",
            width: "100%",
          }}
          onClick={handleScroll}
        ></KeyboardArrowDownIcon>
      ) : null}
      <FullscreenIcon
        style={{
          fontSize: "50px",
          color: "gray",
          bottom: "50px",
          right: "20px",
          position: "absolute",
        }}
        onClick={handleFullscreen}
      ></FullscreenIcon>
    </div>
  );
}
