<template>
  <div class="view-port">
    <h1>3D View Port</h1>
    <img src="../../assets/images/cat.jpg" alt="">
    <div class="three" ref="viewDom"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ThreeView } from './ThreeViewPort'
const viewDom = ref<HTMLElement>()
onMounted(()=>{
  const threeView = new ThreeView(viewDom.value);
})

</script>

<style scoped lang="less">
.view-port{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .three{
    flex: 1;
    // background-color: lightgoldenrodyellow;
  }
}
</style>