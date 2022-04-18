var camera, scene, renderer;
var particleCount = 113;
var smokeRGB = [3, particleCount];
var delta;
var clock;

init();
animate();

function init() {
    clock = new THREE.Clock();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;
    scene.add(camera);

    textGeo = new THREE.PlaneGeometry(300, 300);
    THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS
    // textTexture = THREE.ImageUtils.loadTexture('img/text.png');
    // textTexture.minFilter = THREE.LinearFilter;
    // textMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff, opacity: 1, map: textTexture, transparent: true, blending: THREE.AdditiveBlending })
    // text = new THREE.Mesh(textGeo, textMaterial);
    // text.position.z = 800;
    // scene.add(text);

    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(-1, 0, 1);
    scene.add(light);

    smokeTexture = THREE.ImageUtils.loadTexture('img/smoke.png');
    smokeTexture.minFilter = THREE.LinearFilter;
    smokeMaterials = [];
    smokeGeo = new THREE.PlaneGeometry(300, 300);
    smokeParticles = [];

    for (c = 0; c < 3; c++) {
        smokeRGB[c] = [];
    }

    for (p = 0; p < particleCount; p++) {
        for (c = 0; c < 3; c++) {
            smokeRGB[c][p] = Math.random() * Math.PI;
        }

        smokeMaterial = new THREE.MeshLambertMaterial({color: 0x000000, map: smokeTexture, transparent: true});

        smokeMaterials[p] = smokeMaterial;
        var particle = new THREE.Mesh(smokeGeo, smokeMaterials[p]);
        particle.position.set(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 1000 - 100);
        particle.rotation.z = Math.random() * 360;
        scene.add(particle);
        smokeParticles.push(particle);
    }

    document.getElementById("myScene").appendChild(renderer.domElement);
}

function animate() {
    // note: three.js includes requestAnimationFrame shim
    delta = clock.getDelta();
    requestAnimationFrame(animate);
    evolveSmoke();
    render();
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);
}

function evolveSmoke() {
    var sp = smokeParticles.length;
    while (sp--) {
        smokeParticles[sp].rotation.z += (delta * 0.05);
    }
}

function render() {
    p = particleCount;
    while (--p) {
        for (c = 0; c < smokeRGB.length; c++) {
            smokeRGB[c][p] = smokeRGB[c][p] + delta * 0.15 * Math.random();
            if (smokeRGB[c][p] > Math.PI) {
                smokeRGB[c][p] = 0;
            }
        }

        smokeMaterials[p].color.r = (Math.sin(smokeRGB[0][p]) * 0.5) + 1;
        smokeMaterials[p].color.g = (Math.sin(smokeRGB[1][p]) * 0.5) + 1;
        smokeMaterials[p].color.b = (Math.sin(smokeRGB[2][p]) * 0.5) + 1;
    }

    renderer.render(scene, camera);
}

window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}
