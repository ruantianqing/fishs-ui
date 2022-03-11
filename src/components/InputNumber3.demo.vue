<demo>
不同的输入框尺寸
</demo>

<template>
  <div>
    <InputNumber v-model="num" size="large" @change="handleChange"></InputNumber>

    <br/>

    <InputNumber v-model="num" @change="handleChange"></InputNumber>

    <br/>

    <InputNumber v-model="num" size="small" @change="handleChange"></InputNumber>
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
