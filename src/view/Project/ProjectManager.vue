<template>
    <Tree :data="projectTree.projectTree"></Tree>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import Tree from '../../components/Tree.vue'
  import useStore from '../../store/index'
  const { projectTree } = useStore()
  onMounted(()=>{
    projectTree.getProjectTreeData()
  })
  </script>
  
  <style>
  
  </style>