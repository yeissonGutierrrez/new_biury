import * as THREE from 'three'
import Figure from './Figure'

const perspective = 200

export default class Scene {
    constructor() {
        this.container = document.getElementById('stage')

        this.scene = new THREE.Scene()
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.container,
            alpha: true
        })

        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.renderer.setPixelRatio(window.devicePixelRatio)

        this.initLights()
        this.initCamera()

        this.figure = new Figure(this.scene, () => {
            this.update()
        })
        
    }
    initLights() {
        const ambientlight = new THREE.AmbientLight(0xffffff, 2)
        this.scene.add(ambientlight)
    }

    initCamera() {
        const fov =
            (180 * (2 * Math.atan(window.innerHeight / 2 / perspective))) /
            Math.PI

        this.camera = new THREE.PerspectiveCamera(
            fov,
            window.innerWidth  / window.innerHeight,
            1,
            1000
        )
        this.camera.position.set(0, 0, perspective)
    }


        onMouseMove() {
            window.addEventListener('mousemove', (ev) => {
                this.figure.onMouseMove(ev)
            })
    
        }

    update() {
        if (this.renderer === undefined) return
        requestAnimationFrame(this.update.bind(this))

        this.figure.update()

        this.renderer.render(this.scene, this.camera)
    }
}
