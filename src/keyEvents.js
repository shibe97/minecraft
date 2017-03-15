import keycode from 'keycode';

const v = 10;               // move unit
const rad = Math.PI * 0.1;  // rotate unit

export default (e, renderer, scene, camera) => {
  const p = camera.position;
  const r = camera.rotation;
  switch (keycode(e)) {
    case 'left':
      r.set(r.x, r.y + rad, r.z);
      break;
    case 'right':
      r.set(r.x, r.y - rad, r.z);
      break;
    case 'up':
      p.set(p.x - Math.sin(r.y) * v , p.y, p.z - Math.cos(r.y) * v);
      break;
    case 'down':
      p.set(p.x + Math.sin(r.y) * v , p.y, p.z + Math.cos(r.y) * v);
      break;
  }
  renderer.render(scene, camera);
};
