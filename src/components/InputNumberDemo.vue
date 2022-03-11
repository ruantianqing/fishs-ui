<template>
  <div>
    <h1>InputNumber 示例</h1>
    <Demo :component="InputNUmber1Demo"></Demo>
    <Demo :component="InputNumber2Demo"></Demo>
    <Demo :component="InputNumber3Demo"></Demo>

  </div>
</template>

<script lang='ts' setup>
import Demo from './Demo.vue'
import InputNUmber1Demo from './InputNumber1.demo.vue'
import InputNumber2Demo from './InputNumber2.demo.vue';
import InputNumber3Demo from './InputNumber3.demo.vue';

</script>

<style lang='scss' scoped>
</style>
