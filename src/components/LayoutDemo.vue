<template>
  <div>
    <h1>Layout 示例</h1>
    <Demo :component="Layout1DemoVue"></Demo>
    <Demo :component="Layout2DemoVue"></Demo>
    <Demo :component="Layout3DemoVue"></Demo>

  </div>
</template>

<script lang='ts' setup>
import Demo from './Demo.vue'
import Layout1DemoVue from './Layout1.demo.vue';
import Layout2DemoVue from './Layout2.demo.vue';
import Layout3DemoVue from './Layout3.demo.vue';

</script>

<style lang='scss' scoped>
</style>
