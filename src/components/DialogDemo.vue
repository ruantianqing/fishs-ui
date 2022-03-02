<template>
  <h1>Dialog 示例</h1>
  <Demo :component="Dialog1DemoVue"></Demo>
  <Demo :component="Dialog2DemoVue"></Demo>
</template>

<script lang='ts' setup>
import Demo from './Demo.vue'
import Dialog1DemoVue from './Dialog1.demo.vue';
import Dialog2DemoVue from './Dialog2.demo.vue';

</script>

<style lang='scss' scoped>
</style>
