<demo>
  最大长度
</demo>

<template>
  <Input v-model="value" placeholder="Please input" maxlength="10"></Input>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { Input } from '../lib/index'

const value = ref('')

</script>

<style lang='scss' scoped>

</style>
