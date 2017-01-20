import THREE from 'three.js';

const geometry = new THREE.CubeGeometry(10, 10, 10);
const material = new THREE.MeshPhongMaterial({ color: 0xffffff });

export const createMap = (scene) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      createBlock(scene, -50 + i * 10, -5, -100 + j * 10);
    }
  }
};

const createBlock = (scene, x, y, z) => {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(x, y, z);
  scene.add(mesh);
};
