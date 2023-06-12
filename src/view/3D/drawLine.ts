/**
 * 初步构建画线
*/

import { GridHelper, Line, LineBasicMaterial, PerspectiveCamera, Raycaster, Vector2, Vector3, Scene, BufferGeometry, Float32BufferAttribute } from "three";

export function drawLine(dom: HTMLElement, camera: PerspectiveCamera, grid: GridHelper, scene: Scene) {
    let points: Vector3[] = [];
    let flag:number = 0;
    let line:Line;
    dom.onmousedown = (event:MouseEvent) => {
        // 获取鼠标射线于平面的交点
        const raycaster = new Raycaster();
        const mouse = new Vector2();
        // 将鼠标点击位置归一化到范围[-1, 1]
        mouse.x = (event.clientX / dom.clientWidth) * 2 - 1;
        mouse.y = -(event.clientY / dom.clientHeight) * 2 + 1;
        // 更新射线的起点和方向
        raycaster.setFromCamera(mouse, camera);
        // 暂时实现画线
        if(flag === 0){
            const geometry = new BufferGeometry();
            geometry.setFromPoints([{x:-50,y:0,z:0} as Vector3,{x:50,y:0,z:0} as Vector3,{x:0,y:0,z:-50} as Vector3,{x:0,y:0,z:50} as Vector3]);
            // 创建直线材质
            const material = new LineBasicMaterial({ color: 0x00ff00 });
            // 创建直线对象
            line = new Line(geometry, material);
            scene.add(line);
            flag += 1;
        }else{
            scene.remove(line);
            flag -= 1;
        }
        // TODO:通过鼠标点击去获取实时坐标进行画图
        // 计算射线与网格平面的交点
        // const intersects = raycaster.intersectObject(grid);
        // if (intersects.length > 1) {
            // points.push(intersects[0].point);
            // if (points.length > 1) {
                // 创建直线几何体
                // let position = [];
                // position.push(points[0].x,points[0].y,points[0].z)
                // position.push(points[1].x,points[1].y,points[1].z)
                // position.push(10,0,10)
                // position.push(4,0,30)
                // position.push(40,0,30)
                // geometry.setAttribute('position', new Float32BufferAttribute(position, 3));
                // 创建直线材质
                // const material = new LineBasicMaterial({ color: 0x00ff00 });
                // 创建直线对象
                // line = new Line(geometry, material);
                // scene.add(line);
                // points.length = 0;
            // }
        // } 
    }
    dom.onmousemove = () => {

    }
}