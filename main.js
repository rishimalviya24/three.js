

const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:'red',wireframe:true});
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight);
camera.position.z= 3;
scene.add(camera);

const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth,window.innerHeight);


function animate(){
  mesh.rotation.y += 0.01;
  window.requestAnimationFrame(animate);
  renderer.render(scene,camera);
}

animate();