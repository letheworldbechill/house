export function buildHouse(THREE) {

  const group = new THREE.Group();

  const groundGeo = new THREE.PlaneGeometry(100, 100);
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x779966 });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  group.add(ground);

  const wallGeo = new THREE.BoxGeometry(8, 3, 0.3);
  const wallMat = new THREE.MeshStandardMaterial({ color: 0xe0e0e0 });
  const wall = new THREE.Mesh(wallGeo, wallMat);
  wall.position.set(0, 1.5, 0);
  group.add(wall);

  const doorPivot = new THREE.Group();
  doorPivot.position.set(-4, 0, 0);
  group.add(doorPivot);

  const doorGeo = new THREE.BoxGeometry(0.04, 2, 0.9);
  const doorMat = new THREE.MeshStandardMaterial({ color: 0x5b3a1e });
  const door = new THREE.Mesh(doorGeo, doorMat);
  door.position.set(0, 1, 0);

  doorPivot.add(door);
  group.userData.doorPivot = doorPivot;

  return group;
}
