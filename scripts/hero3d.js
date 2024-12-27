// scripts/hero3d.js
document.addEventListener('DOMContentLoaded', () => {
  // 1. Grab the container for the hero canvas
  const container = document.querySelector('.hero-canvas-container');
  
  // 2. Create the scene & camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    50,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 20;
  
  // 3. Create the renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);
  
  // 4. Torus geometry
  const geometry = new THREE.TorusGeometry(5, 1.5, 16, 100);
  const material = new THREE.MeshLambertMaterial({
    color: 0x00ff00,
    emissive: 0x008000
  });
  const torus = new THREE.Mesh(geometry, material);
  scene.add(torus);
  
  // 5. Lighting
  const pointLight = new THREE.PointLight(0x39ff14, 2, 100);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);
  
  const ambientLight = new THREE.AmbientLight(0x111111);
  scene.add(ambientLight);
  
  // 6. Optional star field
  const starGeometry = new THREE.BufferGeometry();
  const starCount = 200;
  const starPositions = [];
  for (let i = 0; i < starCount; i++) {
    starPositions.push(
      (Math.random() - 0.5) * 200,
      (Math.random() - 0.5) * 200,
      (Math.random() - 0.5) * 200
    );
  }
  starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
  
  const starMaterial = new THREE.PointsMaterial({ color: 0x39ff14, size: 0.5 });
  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);
  
  // 7. Animation
  function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.002;
    torus.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
  
  // 8. Handle Resize
  window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
});
