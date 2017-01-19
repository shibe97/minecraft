import THREE from 'three.js';
console.log(THREE);

const main = function() {
  //シーンとカメラの準備
  const scene  = new THREE.Scene(),//シーン
    width = 1000,
    height = 1000,
    fov = 60,//画角
    aspect = width / height,
    near = 1, //ニアークリップの距離（コレより近い領域は表示されない） 
    far = 1000, //ファーークリップの距離（コレより遠い領域は表示されない）
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    
  //カメラは初期値では0,0,0（x,y,z）で真ん中に位置するオブジェクトを置いたときに見やすいように少し引いて
  camera.position.set(0, 0, 50);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height); //レンダリングする箇所
  document.body.appendChild(renderer.domElement);

  const directionalLight = new THREE.DirectionalLight(0xffffff);//白
  directionalLight.position.set(0, 0.7, 0.7);//光源の位置
  scene.add(directionalLight);//シーンにセット

  const geometry = new THREE.CubeGeometry(10, 10, 10),//図形（四角）
  material = new THREE.MeshPhongMaterial({color: 0xff0000}),//材質（赤）
  mesh = new THREE.Mesh(geometry, material);//図形と材質を合わせた奴
  scene.add(mesh);//シーンにセット

  renderer.render(scene, camera);//レンダラーにシーンとカメラをレンダリングさせる

  //表示
  (function renderLoop() {
    //自分で自分を呼び出すことでアニメーションしてレンダリング...を繰り返す
    requestAnimationFrame(renderLoop);
    //自転の値を少し動かす
    mesh.rotation.set(
      0,
      mesh.rotation.y + 0.01,
      mesh.rotation.x + 0.01
    )
    //レンダリング
    renderer.render(scene, camera);
  })();
}
//DOMの準備ができたらメインを読み込む
window.addEventListener('DOMContentLoaded', main, false);
