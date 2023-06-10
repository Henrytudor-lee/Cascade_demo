<template>
  <div class="main-page">
    <div class="top-bar border-set">
      <tool-bar></tool-bar>
    </div>
    <div class="bottom-operation border-set">
      <div class="project-side border-set">
        <div class="tree-view">
          <model></model>
        </div>
        <div class="properties-view">
          <properties-view></properties-view>
        </div>
      </div>
      <div class="modelView-side border-set">
        <span class="three-view-title border-set">Model View</span>
        <three-view-port></three-view-port>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ToolBar from "./ToolBar/ToolBar.vue";
import Model from "./Model/ModelManager.vue";
import PropertiesView from "./Properties/PropertiesView.vue";
import ThreeViewPort from "./3D/ThreeViewPort.vue";
</script>

<style scoped lang="less">
.border-set{
    border-radius: 8px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
.main-page {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 8px;
  background-color: #edfdf5;
  .top-bar {
    height: 40px;
    background-color: #edfdf5;
    margin-bottom: 8px;
  }
  .bottom-operation {
    flex: 1;
    display: flex;
    .project-side {
      flex: 1;
      background-color: #d9eddf;
      display: flex;
      flex-direction: column;
      margin-right: 8px;
      .tree-view {
        flex: 1.5;
        .model-tree {
          flex: 1;
        }
      }
      .properties-view {
        flex: 1;
      }
    }
    .modelView-side {
      flex: 6;
      overflow: auto;
      position: relative;
      .three-view-title{
        position: absolute;
        left: 8px;
        top: 8px;
        height: 28px;
        line-height: 28px;
        background-color: #d9d8d8;
        padding: 0 8px;
        color: #5D5D5D;
      }
    }
  }
}
</style>