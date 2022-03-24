<template>
  <div class="option-item" :class="computedClass" @click="selectOption">{{ label }}</div>
</template>

<script setup lang='ts'>
import { computed } from 'vue';



const props = defineProps({
  label: {
    type: String
  },
  value: {
    type: String
  },
  emitFunc: {
    type: Function
  },
  disabled: {
    type: Boolean,
    default: false
  }
})



const selectOption = () => {
  if (props.disabled) {
    return
  }
  props.emitFunc([props.label, props.value])
}

const computedClass = computed(() => {
  return {
    'option-item-disabled': props.disabled
  }
})


</script>

<style lang='scss' scoped>
$blue: #40a9ff;

.option-item {
  height: 34px;
  font-size: 16px;
  color: #666;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    color: $blue;
    background-color: #eee;
  }
  &-disabled {
    color: #ccc;
    cursor: not-allowed;
  }
}
</style>
