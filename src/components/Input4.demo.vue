<demo>
  不同大小
</demo>

<template>
  <Input v-model="value" placeholder="Please input" size="large"></Input>
  <br/>
  <Input v-model="value" placeholder="Please input" size="default"></Input>
  <br/>
  <Input v-model="value" placeholder="Please input" size="small"></Input>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import { Input } from '../lib/index'

const value = ref('')

</script>

<style lang='scss' scoped>

</style>
