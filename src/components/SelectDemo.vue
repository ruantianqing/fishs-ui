<template>
  <div>
    <h1>Select 示例</h1>
    <Demo :component="Select1Demo"></Demo>
    <Demo :component="Select2Demo"></Demo>

  </div>
</template>

<script lang='ts' setup>
import Demo from './Demo.vue'
import Select1Demo from './Select1.demo.vue';
import Select2Demo from './Select2.demo.vue';

</script>

<style lang='scss' scoped>
</style>
