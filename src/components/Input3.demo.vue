<demo>
  一键清空
</demo>

<template>
  <Input v-model="value" placeholder="Please input" clearable></Input>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { Input } from '../lib/index'

const value = ref('')

</script>

<style lang='scss' scoped>

</style>
