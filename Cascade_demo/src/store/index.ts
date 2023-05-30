import projectTree from './modules/project'

export default function useStore(){
    return {
        projectTree:projectTree()
    }
}