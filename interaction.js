export function setupInteraction(THREE, renderer, camera, scene) {
  const ray = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  let doorOpen = false;
  let doorAngle = 0;

  function click(e) {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

    ray.setFromCamera(mouse, camera);
    const hits = ray.intersectObjects(scene.children, true);
    if (hits.length === 0) return;

    const obj = hits[0].object;

    const root = obj.parent?.parent;
    if (root?.userData?.doorPivot) {
      doorOpen = !doorOpen;
    }
  }

  window.addEventListener("click", click);

  function animateDoor() {
    requestAnimationFrame(animateDoor);

    const pivot = scene.getObjectByProperty("type", "Group").userData?.doorPivot;
    if (!pivot) return;

    const target = doorOpen ? Math.PI / 2 : 0;
    doorAngle += (target - doorAngle) * 0.07;
    pivot.rotation.y = -doorAngle;
  }

  animateDoor();
}
