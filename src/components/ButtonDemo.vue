<template>
  <div>
    <h1>Button 示例</h1>
    <Demo :component="Button1Demo"></Demo>
    <Demo :component="Button2Demo"></Demo>
    <Demo :component="Button3Demo"></Demo>
    <Demo :component="Button4Demo"></Demo>
    <Demo :component="Button5Demo"></Demo>
  </div>
</template>

<script lang='ts' setup>
import Demo from './Demo.vue'
import Button1Demo from './Button1.demo.vue'
import Button2Demo from './Button2.demo.vue'
import Button3Demo from './Button3.demo.vue'
import Button4Demo from './Button4.demo.vue'
import Button5Demo from './Button5.demo.vue'
</script>

<style lang='scss' scoped>
</style>
