<demo>
有禁用选项的用法
</demo>

<template>
  <Select v-slot="slotProps" :options="options" v-model="value" placeholder="Select" size="large">
    <Option :emitFunc="slotProps.emitFunc" v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled"></Option>
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
    disabled: true
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
