<template>
  <span>TODO:tool-bar</span>
</template>
  
<script setup lang="ts">
import { onMounted } from "vue";
import useStore from "../../store/index";
const { projectTree } = useStore();
onMounted(() => {
  projectTree.getProjectTreeData();
});
</script>
  
  <style>
</style>