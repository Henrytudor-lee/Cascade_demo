<template>
  <div class="view-port">
    <div class="three" ref="viewDom"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ThreeView } from "./ThreeViewPort";
const viewDom = ref<HTMLElement>();
onMounted(() => {
  console.log(viewDom);
  const threeView = new ThreeView(viewDom.value);
});
</script>

<style scoped lang="less">
.view-port {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .three {
    flex: 1;
    // background-color: lightgoldenrodyellow;
  }
}
</style>