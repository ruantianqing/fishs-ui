<template>
<p>
  <input type="checkbox" id="cbox1" v-model="modelValue" :checked="modelValue" :value="label">
  <label style="margin-left: 5px;" :class="modelValue ? 'actived' : ''" for="cbox1">{{label}}</label>
</p>
</template>

<script setup lang='ts'>
import { nextTick, ref, watchEffect } from 'vue';


const props = defineProps({
  label: {
    type: String
  },
  modelValue: {
    type: Boolean  
  }
})

const emit = defineEmits(['update:check'])

watchEffect(() => {
    emit('update:check', props.modelValue)
})



</script>

<style lang='scss' scoped>
$blue: #40a9ff;

.actived {
  color: $blue;
}

</style>
