import { defineStore } from 'pinia'
export default defineStore('project',{
    state(){
        return {
            projectTree:[
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
        getProjectTreeData(){
            const initProjectTreeData = [                
                {
                label: 'Project 1',
                children: [
                  {
                    label: 'Project',
                    children: [
                        { label: 'Excitations' },
                        { label: 'Result' },
                        { label: 'Resolve' },
                    ],
                  },
                  { label: 'Some features' },
                ],
              },
              { label: 'Project 2' }
            ]
            this.projectTree = initProjectTreeData
        }
    }
})