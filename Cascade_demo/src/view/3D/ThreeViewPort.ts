import { GridHelper, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
/* init 3D environment class */
class ThreeView {
    public camera!: PerspectiveCamera;

    public grid!: GridHelper;

    public scene!: Scene;

    public renderer!: WebGLRenderer;
    
    constructor() {

    }
}

export { ThreeView }