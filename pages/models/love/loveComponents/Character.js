import * as THREE from "three";
import { A, D, DIRECTIONS, S, W } from "./utils";
export default function CharacterControls(
  model,
  mixer,
  animationsMap,
  orbitControl,
  camera,
  currentAction
) {
  // animationsMap = new Map(); // Walk, Run, Idle
  // state
  let toggleRun = true;
  // temporary data
  let walkDirection = new THREE.Vector3();
  let rotateAngle = new THREE.Vector3(0, 1, 0);
  let rotateQuarternion = new THREE.Quaternion();
  let cameraTarget = new THREE.Vector3();
  // constants
  let fadeDuration = 0.2;
  let runVelocity = 5;
  let walkVelocity = 2;
  // model = model;
  // mixer = mixer;
  // let animationsMap = animationsMap;

  animationsMap.forEach((value, key) => {
    if (key == currentAction) {
      value.play();
    }
  });
  // orbitControl = orbitControl;
  // camera = camera;
  updateCameraTarget(0, 200);

  function switchRunToggle() {
    toggleRun = !toggleRun;
  }

  function directionOffset(keysPressed) {
    var directionOffset = 0; // w
    if (keysPressed[W]) {
      if (keysPressed[A]) {
        directionOffset = Math.PI / 4; // w+a
      } else if (keysPressed[D]) {
        directionOffset = -Math.PI / 4; // w+d
      }
    } else if (keysPressed[S]) {
      if (keysPressed[A]) {
        directionOffset = Math.PI / 4 + Math.PI / 2; // s+a
      } else if (keysPressed[D]) {
        directionOffset = -Math.PI / 4 - Math.PI / 2; // s+d
      } else {
        directionOffset = Math.PI; // s
      }
    } else if (keysPressed[A]) {
      directionOffset = Math.PI / 2; // a
    } else if (keysPressed[D]) {
      directionOffset = -Math.PI / 2; // d
    }
    return directionOffset;
  }

  let update = (delta, keysPressed) => {
    const directionPressed = DIRECTIONS.some((key) => keysPressed[key] == true);
    var play = "";
    if (directionPressed && toggleRun) {
      play = "Run";
    } else if (directionPressed) {
      play = "Walk";
    } else {
      play = "Idle";
    }
    if (currentAction != play) {
      const toPlay = animationsMap.get(play);
      const current = animationsMap.get(currentAction);
      current.fadeOut(fadeDuration);
      toPlay.reset().fadeIn(fadeDuration).play();
      currentAction = play;
    }
    mixer.update(delta);
    if (currentAction == "Run" || currentAction == "Walk") {
      // calculate towards camera direction
      var angleYCameraDirection = Math.atan2(
        camera.position.x - model.position.x,
        camera.position.z - model.position.z
      );
      // diagonal movement angle offset
      var directionOff = directionOffset(keysPressed);
      // rotate model
      rotateQuarternion.setFromAxisAngle(
        rotateAngle,
        angleYCameraDirection + directionOff
      );
      model.quaternion.rotateTowards(rotateQuarternion, 0.2);
      // calculate direction
      camera.getWorldDirection(walkDirection);
      walkDirection.y = 0;
      walkDirection.normalize();
      walkDirection.applyAxisAngle(rotateAngle, directionOff);
      // run/walk velocity
      const velocity = currentAction == "Run" ? runVelocity : walkVelocity;
      // move model & camera
      const moveX = walkDirection.x * velocity * delta;
      const moveZ = walkDirection.z * velocity * delta;
      model.position.x += moveX;
      model.position.z += moveZ;
      updateCameraTarget(moveX, moveZ);
    }
  };

  function updateCameraTarget(moveX, moveZ) {
    // move camera
    camera.position.x += moveX;
    camera.position.z += moveZ;
    // update camera target
    cameraTarget.x = model.position.x;
    // cameraTarget.y = model.position.y + 1;
    cameraTarget.z = model.position.z;
    orbitControl.target = cameraTarget;
  }

  return update;
}
