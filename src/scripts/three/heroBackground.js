import * as THREE from 'three';

export class HeroBackground {
  constructor() {
    this.canvas = document.getElementById('hero-canvas');
    if (!this.canvas) return;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
      antialias: true
    });

    this.init();
  }

  init() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.camera.position.z = 5;

    // Create grid of cubes
    const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const material = new THREE.MeshPhongMaterial({
      color: 0x333333,
      wireframe: true
    });

    this.cubes = [];
    const grid = 5;
    const spacing = 1;

    for (let x = -grid; x <= grid; x++) {
      for (let y = -grid; y <= grid; y++) {
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(x * spacing, y * spacing, 0);
        cube.rotation.x = Math.random() * Math.PI;
        cube.rotation.y = Math.random() * Math.PI;
        this.scene.add(cube);
        this.cubes.push({
          mesh: cube,
          initialX: x * spacing,
          initialY: y * spacing,
          rotationSpeed: (Math.random() - 0.5) * 0.01
        });
      }
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(2, 3, 4);
    this.scene.add(pointLight);

    this.animate();
    window.addEventListener('resize', this.handleResize.bind(this));
    window.addEventListener('mousemove', this.handleMouseMove.bind(this));
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    this.cubes.forEach(cube => {
      cube.mesh.rotation.x += cube.rotationSpeed;
      cube.mesh.rotation.y += cube.rotationSpeed;
    });

    this.renderer.render(this.scene, this.camera);
  }

  handleMouseMove(event) {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;

    this.cubes.forEach(cube => {
      const distX = cube.initialX - (x * 2);
      const distY = cube.initialY - (y * 2);
      cube.mesh.position.z = Math.sqrt(distX * distX + distY * distY) * 0.3;
    });
  }

  handleResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

if (typeof window !== 'undefined') {
  new HeroBackground();
} 