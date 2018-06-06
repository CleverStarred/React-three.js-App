import * as THREE from 'three';
import './../../../node_modules/three/examples/js/controls/OrbitControls.js';

const SPEED = 0.01;

class GraphicsEngine {
    constructor(options) {
        options = options || {};

        const w = GraphicsEngine.WindowWidth;
        const h = GraphicsEngine.WindowHeight;


        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color('white');

        this.camera = new THREE.PerspectiveCamera(15, w / h, 0.1, Number.MAX_SAFE_INTEGER);
        this.camera.position.set(0, 50, 300);
        this.scene.add(this.camera);

        this.renderer = new THREE.WebGLRenderer(options);

        this.renderer.setSize(w, h);
        this.renderer.shadowMapEnabled = true;

        let size = 200;
        let divisions = 20;

        let gridHelper = new THREE.GridHelper(size, divisions);
        this.scene.add(gridHelper);

        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.25;
        this.controls.enableZoom = true;

        let geometry = new THREE.BoxGeometry(10, 10, 10);
        let cube = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial());
        cube.position.y = 10;
        cube.castShadow = true;
        this.scene.add(cube);
        this.cube = cube;
        this.camera.lookAt(cube.position);
        let ambientLight = new THREE.AmbientLight('#666');
        this.scene.add(ambientLight);

        let pointLight1 = new THREE.PointLight('#ffffff');
        pointLight1.position.set(10, 20, 30);
        pointLight1.intensity = 0.8;
        pointLight1.castShadow = false;
        this.scene.add(pointLight1);

        this.isAnimating = true;
    }

    static get WindowWidth() {
        // in case we are in an iframe
        return top.innerWidth;
    }

    static get WindowHeight() {
        // in case we are in an iframe
        return top.innerHeight;
    }

    start() {
        this.isAnimating = true;
        this.render();
    }

    stop() {
        this.isAnimating = false;
    }

    render() {
        this.renderer.render(this.scene, this.camera);
        this.rotateCube();
        if (this.isAnimating) {
            requestAnimationFrame(this.render.bind(this));
        }
    }

    rotateCube() {
        this.cube.rotation.x -= SPEED * 2;
        this.cube.rotation.y -= SPEED;
        this.cube.rotation.z -= SPEED * 3;
    }

}

export default GraphicsEngine;
