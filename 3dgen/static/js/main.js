const socket = io.connect('http://' + document.domain + ':' + location.port);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
camera.position.z = 5;

const loader = new THREE.GLTFLoader();
loader.load('avatar.gltf', function(gltf) {
    const avatar = gltf.scene;
    scene.add(avatar);
    animate();
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

socket.on('move', function(data) {
    // Update avatar position based on data
});

socket.on('message', function(data) {
    // Display message
});

document.addEventListener('keydown', function(event) {
    const move = { x: 0, y: 0, z: 0 };
    switch (event.code) {
        case 'ArrowUp': move.z -= 0.1; break;
        case 'ArrowDown': move.z += 0.1; break;
        case 'ArrowLeft': move.x -= 0.1; break;
        case 'ArrowRight': move.x += 0.1; break;
    }
    socket.emit('move', move);
});

const recognconst socket = io.connect('http://' + document.domain + ':' + location.port);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
camera.position.z = 5;

const loader = new THREE.GLTFLoader();
loader.load('avatar.gltf', function(gltf) {
    const avatar = gltf.scene;
    scene.add(avatar);
    animate();
});

const loaderText = new THREE.FontLoader().load('fonts/helvetiker_regular.typeface.json', function(font) {
    const geometry = new THREE.TextGeometry('PHIND', { font: font, size: 1, height: 0.2 });
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const textMesh = new THREE.Mesh(geometry, material);
    scene.add(textMesh);
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

socket.on('move', function(data) {
    // Update avatar position based on data
});

socket.on('message', function(data) {
    // Display message
});

document.addEventListener('keydown', function(event) {
    const move = { x: 0, y: 0, z: 0 };
    switch (event.code) {
        case 'ArrowUp': move.z -= 0.1; break;
        case 'ArrowDown': move.z += 0.1; break;
        case 'ArrowLeft': move.x -= 0.1; break;
        case 'ArrowRight': move.x += 0.1; break;
    }
    socket.emit('move', move);
});

const recognition = new webkitSpeechRecognition();
recognition.onresult = function(event) {
    const message = event.results[0][0].transcript;
    socket.emit('message', { username: 'User', text: message });
};
recognition.start();
ition = new webkitSpeechRecognition();
recognition.onresult = function(event) {
    const message = event.results[0][0].transcript;
    socket.emit('message', { username: 'User', text: message });
};
recognition.start();
