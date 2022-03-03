<template>
<p @click="change">
  <input type="checkbox" id="cbox1" v-model="check" :checked="check" :value="label">
  <label for="cbox1">{{label}}</label>
</p>
</template>

<script setup lang='ts'>
import { nextTick, ref } from 'vue';


const props = defineProps({
  label: {
    type: String
  },
  check: {
    type: Boolean  
  }
})
console.log(props.check)

const emit = defineEmits(['update:check'])

const change = () => {
  nextTick(() => {
    emit('update:check', props.check)
  })
}


</script>

<style lang='scss' scoped>

</style>
