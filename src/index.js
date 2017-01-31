import THREE from 'three.js';
import keyEvents from './keyEvents';
import { createMap } from './map';

const main = function() {
  //シーンとカメラの準備
  const scene  = new THREE.Scene(),//シーン
    width = window.innerWidth,
    height = window.innerHeight,
    fov = 60,//画角
    aspect = width / height,
    near = 1, //ニアークリップの距離（コレより近い領域は表示されない） 
    far = 1000, //ファーークリップの距離（コレより遠い領域は表示されない）
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 20, 0);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height); //レンダリングする箇所
  document.body.appendChild(renderer.domElement);

  const directionalLight = new THREE.DirectionalLight(0xffffff);//白
  directionalLight.position.set(0, 0.7, 0.7);//光源の位置
  scene.add(directionalLight);//シーンにセット

  createMap(scene);
  
  renderer.render(scene, camera);

  // set key events
  document.addEventListener('keydown', (e) => keyEvents(e, renderer, scene, camera));
}

//DOMの準備ができたらメインを読み込む
window.addEventListener('DOMContentLoaded', main, false);
