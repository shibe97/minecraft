import THREE from 'three.js';
import perlin from 'perlin-noise';
import config from './config/blocks';

//const loader = new THREE.TextureLoader();

const geometry = new THREE.BoxGeometry(10, 10, 10);

const X_LENGTH = 100;
const Y_LENGTH = 100;

/*
class World {
  constructor(name = 'My World', size = { x: 100, y: 100 }) {
    this.name = name;
    this.size = size;
  }
}*/

class Block {
  constructor(x, y, z, type) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.type = type;
  }
  setMesh() {
    const material = new THREE.MeshPhongMaterial({ color: config[this.type].color });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(this.x, this.y, this.z);
  }
  getMesh() {
    return this.mesh;
  }
}

export const createMap = (scene) => {
  const yArray = perlin.generatePerlinNoise(X_LENGTH, Y_LENGTH);
  for (let i = 0; i < X_LENGTH; i++) {
    for (let j = 0; j < Y_LENGTH; j++) {
        const y = Math.round(yArray[i * Y_LENGTH + j] * 3) * 10 - 25;
        const type = Math.random() > 0.5 ? 'dirt' : 'cobblestone';
        const block = new Block(-X_LENGTH*10/2 + i * 10, y, -Y_LENGTH*10/2 + j * 10, type);
        block.setMesh();
        scene.add(block.getMesh());
    }
  }
};

/*
const createBlock = (scene, x, y, z) => {
  loader.load('textures/blocks/brick.png', (texture) => {
    const mesh = new THREE.Mesh(geometry, material);
    //const mesh = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({ map: texture }));
    mesh.position.set(x, y, z);
    scene.add(mesh);
  });
};*/
