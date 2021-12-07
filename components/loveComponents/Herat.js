var container, stats;
var camera, scene, renderer;
var group,
  shapes = [];
export default function Herats(THREE, scene, renderer, camera) {
  var x = -25,
    y = -250;
  var heartShape = new THREE.Shape();
  heartShape.moveTo(x + 25, y + 25);
  heartShape.bezierCurveTo(x + 25, y + 25, x + 20, y, x, y);
  heartShape.bezierCurveTo(x - 30, y, x - 30, y + 35, x - 30, y + 35);
  heartShape.bezierCurveTo(x - 30, y + 55, x - 10, y + 77, x + 25, y + 95);
  heartShape.bezierCurveTo(x + 60, y + 77, x + 80, y + 55, x + 80, y + 35);
  heartShape.bezierCurveTo(x + 80, y + 35, x + 80, y, x + 50, y);
  heartShape.bezierCurveTo(x + 35, y, x + 25, y + 25, x + 25, y + 25);

  var extrudeSettings = {
    amount: 1,
    bevelEnabled: true,
    bevelSegments: 20,
    steps: 2,
    bevelSize: 20,
    bevelThickness: 10,
  };

  for (
    var i = -window.innerWidth / 2;
    i < window.innerWidth / 2;
    i += 60 + Math.random() * 50
  ) {
    for (var j = 0; j < window.innerHeight; j += 60 + Math.random() * 50) {
      addShape(
        heartShape,
        extrudeSettings,
        "#ff0022",
        i,
        j,
        0,
        Math.random() * 0.8,
        Math.random() * 0.8,
        Math.PI,
        0.1 + Math.random() * 0.3
      );
    }
  }

  function addShape(shape, extrudeSettings, color, x, y, z, rx, ry, rz, s) {
    var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    var mesh = new THREE.Mesh(
      geometry,
      new THREE.MeshPhongMaterial({ color: color })
    );
    mesh.position.set(x + 25, y - 50, z + 100);
    mesh.rotation.set(rx, ry, rz);
    mesh.scale.set(s, s, s);
    shapes.push({
      shape: mesh,
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
    });
    scene.add(mesh);
    render();
  }

  function animate() {
    var speed = 0.005;
    const clock = new THREE.Clock();
    const elapsedTime = clock.getElapsedTime();
    shapes.forEach((el) => {
      //   el.shape.rotation.x += el.x * speed;
      //   el.shape.rotation.y += el.y * speed;
      //   el.shape.rotation.z += el.z * speed;
      el.shape.position.y += -elapsedTime;
    });
  }

  function render() {
    requestAnimationFrame(render);
    animate();
    renderer.render(scene, camera);
  }
}
