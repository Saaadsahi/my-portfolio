// scripts/hero3d.js
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.hero-canvas-container');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    50,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 20;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // Detect iOS if you want device-specific logic:
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  // Create a torus
  const geometry = new THREE.TorusGeometry(5, 1.5, 16, 100);
  const material = new THREE.MeshLambertMaterial({
    color: 0x00ff00,
    emissive: 0x008000
  });
  const torus = new THREE.Mesh(geometry, material);
  scene.add(torus);

  // Lights
  const pointLight = new THREE.PointLight(0x39ff14, 2, 100);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  const ambientLight = new THREE.AmbientLight(0x111111);
  scene.add(ambientLight);

  // Star field
  const starCount = 200;
  const starGeometry = new THREE.BufferGeometry();
  const starPositions = [];
  for (let i = 0; i < starCount; i++) {
    starPositions.push(
      (Math.random() - 0.5) * 200,
      (Math.random() - 0.5) * 200,
      (Math.random() - 0.5) * 200
    );
  }
  starGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(starPositions, 3)
  );
  const starMaterial = new THREE.PointsMaterial({ color: 0x39ff14, size: 0.5 });
  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.002;
    torus.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();

  // Handle resize / orientation changes
  window.addEventListener('resize', onResize);
  window.addEventListener('orientationchange', onResize); // extra for iOS orientation

  function onResize() {
    const width = container.clientWidth;
    const height = container.clientHeight;

    // If iOS, do any special handling if needed:
    if (isIOS) {
      // Typically iOS is fine with standard approach,
      // but you could do something specific for iPhones here if desired
    }

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }
});
