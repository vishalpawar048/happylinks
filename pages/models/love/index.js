// export default function Home({ allPostsData }) {
//     return <div>Hello Love.......</div>;
//   }

import * as THREE from "three";
import { useEffect, useState } from "react";
import Link from "next/link";
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
import { getExperiences, saveExperiences } from "../../../service/experience";
import Modifier from "./Modifier";

function Love({ fromExperience, messege }) {
  // const gui = new GUI();
  console.log(
    "---->>>>>>love",
    messege ? messege : "Happy Birthday Sweetheart..."
  );

  const [msg, setmsg] = useState(messege ? messege : "");
  const [finalMsg, setfinalMsg] = useState(
    messege ? messege : "Happy Birthday Sweetheart..."
  );
  const [urlToShare, setUrlToShare] = useState("");
  const [experienceId, setExperienceId] = useState("");

  console.log(">>>>>>>finalMsg", finalMsg);

  useEffect(() => {
    var w = window.innerWidth;
    var h = window.innerHeight;
    const canvas = document.querySelector("#canvas");

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
    if (messege) {
      setfinalMsg(messege);
    }
    TextMsg(THREE, scene, finalMsg);
    // const loader = new GLTFLoader(loadingManager);

    const loader = new GLTFLoader();

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
        render();
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

      if (donaldDanceMixer) {
        donaldDanceMixer.update(delta);
      }
      if (planeMixer) {
        planeMixer.update(delta);
      }
      if (heartMixer) {
        heartMixer.update(delta * 0.25);
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
  }, [finalMsg, messege]);

  function applyText(msg) {
    console.log("value---", msg);
    setfinalMsg(msg);
  }

  async function save() {
    let id = await saveExperiences(msg, "love");
    setExperienceId(id);
    setUrlToShare(`${window.location.href}/experience/${id}`);
    console.log("process.env.PUBLIC_URL", window.location.href, id);
  }

  let canvasStyle = {
    width: "100%",
    height: "100%",
    display: "block",
    backgroundColor: "#bfe3dd",
  };
  return (
    <div className="love">
      <canvas id="canvas" style={canvasStyle} />

      {fromExperience ? null : (
        <Modifier
          applyText={applyText}
          save={save}
          msg={msg}
          setmsg={setmsg}
          urlToShare={urlToShare}
          experienceId={experienceId}
        ></Modifier>
      )}
    </div>
  );
}

export default Love;
