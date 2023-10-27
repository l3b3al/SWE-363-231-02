let timeout;
const screensaverElement = document.getElementById('screensaver');

const resetTimer = () => {
    clearTimeout(timeout);
    screensaverElement.style.display = 'none';
    timeout = setTimeout(() => {
        screensaverElement.style.display = 'block';
        initScreensaver();
    }, 60000);
};

const initScreensaver = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    screensaverElement.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(10, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff4500, wireframe: true });
    const icosahedron = new THREE.Mesh(geometry, material);
    scene.add(icosahedron);

    camera.position.z = 30;

    const animate = () => {
        requestAnimationFrame(animate);
        icosahedron.rotation.x += 0.01;
        icosahedron.rotation.y += 0.01;
        renderer.render(scene, camera);
    };
    animate();
};

document.addEventListener('mousemove', resetTimer);
document.addEventListener('keypress', resetTimer);

resetTimer();