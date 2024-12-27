// scripts/neonLines.js
document.addEventListener('DOMContentLoaded', () => {
  // We'll place this full-screen behind all content
  const container = document.body; 
  const scene = new THREE.Scene();
  
  // Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 10;
  
  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 1);
  renderer.domElement.style.position = 'fixed';
  renderer.domElement.style.top = 0;
  renderer.domElement.style.left = 0;
  renderer.domElement.style.zIndex = '-1'; // behind everything
  container.appendChild(renderer.domElement);
  
  // Group of neon lines
  const group = new THREE.Group();
  scene.add(group);

  // Function to create a single random line
  function createNeonLine(color) {
    const material = new THREE.LineBasicMaterial({ color: color, linewidth: 2 });
    const points = [];
    // Random wiggly line with 5 points
    for (let i = 0; i < 5; i++) {
      points.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        )
      );
    }
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return new THREE.Line(geometry, material);
  }
  
  // Create multiple lines in green/pink
  const lineCount = 10;
  for (let i = 0; i < lineCount; i++) {
    const color = (i % 2 === 0) ? 0x39ff14 : 0xff1493; // neon green / dark pink
    const neonLine = createNeonLine(color);
    group.add(neonLine);
  }
  
  // Mouse and scroll tracking
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) - 0.5;  // range [-0.5..0.5]
    mouseY = (e.clientY / window.innerHeight) - 0.5; // range [-0.5..0.5]
  });
  
  let scrollY = 0;
  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
  });
  
  // Animate lines
  function animate() {
    requestAnimationFrame(animate);
    // Smooth rotation based on mouse
    group.rotation.x += 0.01 * (mouseY - group.rotation.x);
    group.rotation.y += 0.01 * (mouseX - group.rotation.y);
    
    // Subtle rotation on Z based on scroll
    group.rotation.z = scrollY * 0.001;
    
    renderer.render(scene, camera);
  }
  animate();
  
  // Handle resizing
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});
