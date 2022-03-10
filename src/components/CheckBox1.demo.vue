<demo>
常规使用
</demo>

<template>
  <div>
    <Checkbox v-model:check="checked" label="test"></Checkbox>
  </div>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue';
import { Checkbox } from '../lib/index'

const checked = ref(true)

</script>

<style lang='scss' scoped>

</style>
