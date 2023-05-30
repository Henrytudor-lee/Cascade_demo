<template>
  <div class="view-port">
    <h1>3D View Port</h1>
    <div class="three"></div>
  </div>
</template>

<script setup lang="ts">
import { ThreeView } from './ThreeViewPort'
const threeView = new ThreeView();
</script>

<style scoped lang="less">
.view-port{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .three{
    flex: 1;
    background-color: lightgoldenrodyellow;
  }
}
</style>