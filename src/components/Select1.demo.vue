<demo>
常规用法
</demo>

<template>
  <Select v-slot="slotProps" :options="options" v-model="value" placeholder="Select" size="large">
    <Option :emitFunc="slotProps.emitFunc" v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></Option>
  </Select>

  <br />

  <Select v-slot="slotProps" :options="options" v-model="value" placeholder="Select" size="normal">
    <Option :emitFunc="slotProps.emitFunc" v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></Option>
  </Select>

  <br />

  <Select v-slot="slotProps" :options="options" v-model="value" placeholder="Select" size="small">
    <Option :emitFunc="slotProps.emitFunc" v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></Option>
  </Select>
</template>

<script lang="ts" setup>
import { Select, Option } from '../lib/index'
import { ref, watch } from 'vue'

const value = ref('')

watch(value, newValue => {
  console.log(newValue)
})


const options = [
  {
    value: '1',
    label: 'Option1',
  },
  {
    value: '2',
    label: 'Option2',
  },
  {
    value: '3',
    label: 'Option3',
  },
  {
    value: '4',
    label: 'Option4',
  },
  {
    value: '5',
    label: 'Option5',
  },
]

</script>
