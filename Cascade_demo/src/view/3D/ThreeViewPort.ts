import { GridHelper, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
/* init 3D environment class */
class ThreeView {
    public camera!: PerspectiveCamera;

    public grid!: GridHelper;

    public scene!: Scene;

    public controls!: OrbitControls;

    public renderer!: WebGLRenderer;
    
    constructor(domElement: HTMLElement) {
        
        
        
        this.initRenderer(domElement)
    }
    initScene(){
        this.scene = new Scene()
    }
    initCamera(){
        this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.camera.position.z = 20
        this.camera.position.y = 20
        this.camera.position.x = 10
    }
    initGrid(){

    }
    initRenderer(domElement:HTMLElement){
        this.renderer = new WebGLRenderer()
        this.renderer.setSize( window.innerWidth, window.innerHeight )
        // renderer.setClearColor(0xffffff, 1)
        // 将渲染器的DOM插入HTML中
        domElement.appendChild(this.renderer.domElement)
    }
    initControls(camera:PerspectiveCamera){
        this.controls = new OrbitControls( camera, this.renderer.domElement );
    }
    animate(){
        requestAnimationFrame(this.animate)
        this.controls.update();
        this.renderer.setSize( window.innerWidth, window.innerHeight )
        this.renderer.render(this.scene, this.camera) // 将场景，相机传入渲染器
    }
}

export { ThreeView }