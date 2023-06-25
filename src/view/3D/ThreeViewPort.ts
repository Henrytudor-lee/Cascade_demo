import { BoxGeometry, DirectionalLight, GridHelper, Group, HemisphereLight, Mesh, MeshPhongMaterial, PCFSoftShadowMap, PerspectiveCamera, Scene, Vector2, Vector3, WebGLRenderer } from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { OrbitControls } from './controls.js'
import { MyGrid } from './GridHelper';
import { initOcc } from './OpenCascade.js';
/* init 3D environment class */
class ThreeView {
    // threejs容器
    private context!: HTMLElement;
    // threejs必要元素
    public camera!: PerspectiveCamera;
    public scene!: Scene;
    public renderer!: WebGLRenderer;
    public controls!: OrbitControls;
    private light!: Group;
    // threejs辅助元素
    public grid!: GridHelper;
    // threejs模型仓库
    private group!: Group;
    // 初始化模型
    public cube!: Mesh;
    // 鼠标
    private mouse:Vector2;
    /**
     * 该类构造函数
     * @param domElement threeView容器dom元素
     */
    constructor(domElement: HTMLElement) {

        this.context = domElement;
        this.group   = new Group();
        this.mouse = new Vector2();
        // 预设模型
        this.presetModel();
        this.initLight();
        
        this.initScene();
        this.initCamera();
        this.initRenderer();

        this.initControls(this.camera);

        this.animate();
        initOcc();
    }
    private initScene(){

        this.scene = new Scene();
        // init grid helper
        this.grid = new MyGrid().grid;

        this.scene.add(this.light);
        this.scene.add(this.grid);
        this.scene.add(this.group);
        this.scene.add(this.cube);
    }
    private initCamera(){

        this.camera = new PerspectiveCamera(75, this.context.clientWidth / this.context.clientHeight, 0.1, 1000);
        this.camera.position.z = 8;
        this.camera.position.y = 5;
        this.camera.position.x = 0;
    }
    private initRenderer(){
        this.renderer = new WebGLRenderer({
            antialias:true
        });
        this.renderer.setSize( this.context.clientWidth, this.context.clientHeight );
        this.renderer.setClearColor(0x303030, 1)
        this.renderer.shadowMap.enabled    = true;
        this.renderer.shadowMap.type       = PCFSoftShadowMap;
        // 将渲染器的DOM插入HTML中
        this.context.appendChild(this.renderer.domElement);
    }
    private initControls(camera:PerspectiveCamera){
        this.controls = new OrbitControls( camera, this.renderer.domElement );
        this.controls.target.set(0,0,0);
        this.controls.keys = {
            LEFT: 'ArrowLeft', //left arrow
            UP: 'ArrowUp', // up arrow
            RIGHT: 'ArrowRight', // right arrow
            BOTTOM: 'ArrowDown' // down arrow
        }
        // this.controls.enableZoom = false;
        // this.context.addEventListener('mousemove',(event:MouseEvent) => {
        //     console.log(1)
        //     this.mouse.x = (event.clientX / this.context.clientWidth) * 2 - 1;
        //     this.mouse.y = -(event.clientY / this.context.clientHeight) * 2 + 1;
        // },false)

        // TODO:暂定初始轨道控制器基点，后续以鼠标与辅助网格交点为基点。
        // this.context.onwheel = () => {
        //     // this.controls.target.set(40,0,0);
            
        //     // 控制场景缩放
        //     var scaleFactor = 1 + this.mouse.y * 0.1;
        //     console.log(scaleFactor,this.mouse.y)
        //     this.scene.scale.set(scaleFactor, scaleFactor, scaleFactor);
        // }
    }
    private initLight(){
        this.light = new Group();
        // 半球面光源
        const light  = new HemisphereLight (0xffffff, 0x444444);
        light.position.set(0, 200, 0);
        // 平行光源
        const light2 = new DirectionalLight(0xbbbbbb);
        light2.position.set(6, 50, -12);
        light2.castShadow = true;
        light2.shadow.camera.top      =  200;
        light2.shadow.camera.bottom   = -200;
        light2.shadow.camera.left     = -200;
        light2.shadow.camera.right    =  200;
        light2.shadow.radius          =  32;
        light2.shadow.mapSize.width   =  128;
        light2.shadow.mapSize.height  =  128;

        this.light.add(light);
        this.light.add(light2);
    }
    /**
     * 0610:这里用箭头函数的原因在于,第一次this.animate()时，animate这个方法还未定义，this指向的undefined，所以会报错。
     * 解决方法有三种：
     * 1 在constructor里面定义函数再自调就避免了；
     * 2 如下所示，利用箭头函数的this指向所处环境的this指向特性解决这个问题；
     */
    // 
    private animate = () => {
        this.animate && requestAnimationFrame(this.animate);

        this.controls.update();
        this.rotateCube();



        this.renderer.setSize( this.context.clientWidth, this.context.clientHeight );
        this.renderer.render(this.scene, this.camera); // 将场景，相机传入渲染器
    }
    presetModel(){
        const geometry = new BoxGeometry( 2, 4, 3);
        const material = new MeshPhongMaterial( { color: 0xFFE3F1 });
        
        this.cube = new Mesh( geometry, material );
        this.cube.castShadow = true;
        this.cube.position.set( 0, 2, 0 );
    }
    rotateCube(){
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
    }
}

export { ThreeView }