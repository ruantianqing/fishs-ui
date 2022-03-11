<demo>
步进
</demo>

<template>
  <div>
    <InputNumber v-model="num" :step="2" @change="handleChange"></InputNumber>
  </div>
</template>

<script lang='ts' setup>
import { InputNumber } from '../lib/index'
import { ref } from 'vue'

const num = ref(1)

const handleChange = (value) => {
  console.log(value)
}

</script>

<style lang='scss' scoped>
</style>
