import { GridHelper, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { MyGrid } from './GridHelper';
/* init 3D environment class */
class ThreeView {
    public camera!: PerspectiveCamera;

    public grid!: GridHelper;

    public scene!: Scene;

    public controls!: OrbitControls;

    public renderer!: WebGLRenderer;
    
    private context!:HTMLElement;

    /**
     * 该类构造函数
     * @param domElement threeView容器dom元素
     */
    constructor(domElement: HTMLElement) {
        this.context = domElement;
        
        console.log(domElement.offsetWidth);
        // init grid helper
        this.grid = new MyGrid();
        console.log(this.grid)


        this.initScene();
        this.initCamera();
        this.initRenderer();
        this.initControls(this.camera);

        this.animate();
    }
    initScene(){
        this.scene = new Scene();
        this.scene.add(this.grid);
    }
    initCamera(){
        this.camera = new PerspectiveCamera(75, this.context.clientWidth / this.context.clientHeight, 0.1, 1000);
        this.camera.position.z = 5;
        this.camera.position.y = 5;
        this.camera.position.x = 5;
    }
    initGrid(){

    }
    initRenderer(){
        this.renderer = new WebGLRenderer();
        this.renderer.setSize( this.context.clientWidth, this.context.clientHeight );
        this.renderer.setClearColor(0xF3F8F6, 1)
        // 将渲染器的DOM插入HTML中
        this.context.appendChild(this.renderer.domElement);
    }
    initControls(camera:PerspectiveCamera){
        this.controls = new OrbitControls( camera, this.renderer.domElement );
    }
    initGridHelper(){

    }
    /**
     * 0610:这里用箭头函数的原因在于,第一次this.animate()时，animate这个方法还未定义，this指向的undefined，所以会报错。
     * 解决方法有三种：
     * 1 在constructor里面定义函数再自调就避免了；
     * 2 如下所示，利用箭头函数的this指向所处环境的this指向特性解决这个问题；
     */
    // 
    animate = () => {
        this.animate && requestAnimationFrame(this.animate);
        this.controls.update();
        this.renderer.setSize( this.context.clientWidth, this.context.clientHeight );
        this.renderer.render(this.scene, this.camera); // 将场景，相机传入渲染器
    }
}

export { ThreeView }