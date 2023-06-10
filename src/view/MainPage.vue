<template>
    <div class="main-page">
        <div class="project-side">
            <div class="tree-view">
                <div class="project-tree">
                    <ProjectManager></ProjectManager>
                </div>
                <div class="model-tree">
                    <Model></Model>
                </div>
            </div>
            <div class="properties-view">
                <PropertiesView></PropertiesView>
            </div>
        </div>
        <div class="modelView-side">
            <ThreeViewPort></ThreeViewPort>
        </div>
    </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
// import Tree from '../components/Tree.vue'
import ProjectManager from './Project/ProjectManager.vue'
import Model from './Model/ModelManager.vue'
import PropertiesView from './Properties/PropertiesView.vue'
import ThreeViewPort from './3D/ThreeViewPort.vue'
// const data = ref('henry')
</script>

<style scoped lang="less">
    .main-page{
        display: flex;
        width: 100vw;
        height: 100vh;
        .project-side{
            flex: 1;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            .tree-view{
                flex: 1.5;
                display: flex;
                .project-tree{
                    flex: 1;
                    // background-color: lightblue;
                }
                .model-tree{
                    flex: 1;
                    // background-color: lightcyan;
                }
            }
            .properties-view{
                flex: 1;
                // background-color: lightgray;
            }
        }
        .modelView-side{
            flex: 2.5;
            overflow: auto;
            // background-color: #878787;
        }
    }
</style>