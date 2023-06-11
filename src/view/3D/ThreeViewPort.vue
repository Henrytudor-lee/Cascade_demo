<template>
  <div class="view-port">
    <div class="three" ref="viewDom"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ThreeView } from "./ThreeViewPort";
const viewDom = ref<HTMLElement | null>(null);
onMounted(() => {
  const threeView = new ThreeView(<HTMLElement>(viewDom).value);
  console.log(threeView);
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
  }
}
</style>