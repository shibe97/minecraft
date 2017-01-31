import keycode from 'keycode';

export default (e, renderer, scene, camera) => {
  const p = camera.position;
  switch (keycode(e)) {
    case 'left':
      p.set(p.x - 10, p.y, p.z);
      break;
    case 'right':
      p.set(p.x + 10, p.y, p.z);
      break;
    case 'up':
      p.set(p.x, p.y, p.z - 10);
      break;
    case 'down':
      p.set(p.x, p.y, p.z + 10);
      break;
  }
  renderer.render(scene, camera);
};
