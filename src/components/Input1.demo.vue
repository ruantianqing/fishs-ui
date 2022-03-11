<demo>
  常规使用
</demo>

<template>
  <Input v-model="value" placeholder="Please input"></Input>
</template>

<script setup lang='ts'>
import { ref, watch } from 'vue';
import { Input } from '../lib/index'

const value = ref('')


</script>

<style lang='scss' scoped>

</style>
