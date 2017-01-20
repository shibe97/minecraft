import THREE from 'three.js';

const loader = new THREE.TextureLoader();

const geometry = new THREE.BoxGeometry(10, 10, 10);
//const material = new THREE.MeshPhongMaterial({ color: 0xffffff })

export const createMap = (scene) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      createBlock(scene, -50 + i * 10, -5, -100 + j * 10);
    }
  }
};

const createBlock = (scene, x, y, z) => {
  loader.load('textures/blocks/brick.png', (texture) => {
    //const mesh = new THREE.Mesh(geometry, material);
    const mesh = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ map: texture }));
    mesh.position.set(x, y, z);
    scene.add(mesh);
  });
};
