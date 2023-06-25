/**
 * 此文件定义加载全局occ对象。
*/
import initOpenCascade, { OpenCascadeInstance } from 'opencascade.js'

export const initOcc = () => {
    let oc:OpenCascadeInstance;
    console.log('OpenCascade loading......')
    initOpenCascade().then((occInstance: OpenCascadeInstance) => {
        oc = occInstance;
        console.log('OpenCascade loading done!')
        return oc;
    })
}
