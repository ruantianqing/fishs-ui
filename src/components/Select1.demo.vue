<demo>
常规用法
</demo>

<template>
  <Select v-model="value" placeholder="Select">
    <Option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></Option>
  </Select>
</template>

<script lang="ts" setup>
import { Select, Option } from '../lib/index'
import { ref, watch } from 'vue'

const value = ref('')

watch(value, newValue => {
  console.log(newValue)
})

const test = (label: string, value: string) => {
  console.log(label, value)
}

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

</script>
