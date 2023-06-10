import { defineStore } from 'pinia'
export default defineStore('model',{
    state(){
        return {
            modelTree:[
                {
                    label: 'Parent node 1',
                    children: [
                      {
                        label: 'Parent node 1-1',
                        children: [{ label: 'Leaf node 1-1-1' }],
                      },
                      { label: 'Leaf node 1-2' },
                    ],
                  },
                  { label: 'Leaf node 2' },
            ]
        }
    },
    actions:{
        getModelTreeData(){
            const initModelTreeData = [                
                {
                label: 'Models',
                children: [
                  {
                    label: 'Mesh',
                    children: [
                        { label: 'Circle1',name:'Circle1',size:50,unit:'mm' },
                        { label: 'Box1' ,name:'Box1',size:40,unit:'mm'},
                        { label: 'Box2' ,name:'Box2',size:20,unit:'mm'},
                    ],
                  },
                  {
                    label: 'Face',
                    children: [
                        { label: 'Face1' ,name:'Face1',size:100,unit:'mm'}
                    ],
                  }
                ],
              },
              { label: 'List' }
            ]
            this.modelTree = initModelTreeData
        },
        modelDataHandle(name:any){
            this.modelTree.forEach(item =>{
                let data:any;
                if(item.label === name){
                    data = item
                    return
                }
            })
        }
    }
})