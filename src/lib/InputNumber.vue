<template>
<div class="fishs">
  <span :class="{'fishs-decrease': true, disabled: modelValue <= min}" @click="decrease" @mousedown="decreaseMouseDown" @mouseup="clearTimeBar">-</span>
  <span :class="{'fishs-increase': true, disabled: modelValue >= max}" @click="increase" @mousedown="increaseMouseDown" @mouseup="clearTimeBar">+</span>
  <div class="fishs-input">
    <input v-model="modelValue" class="fishs-input__inner" type="text">
  </div>
</div>

</template>

<script setup lang='ts'>
import { nextTick, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: Number
  },
  min: {
    type: Number
  },
  max: {
    type: Number
  }
})

watch(() => props.modelValue, newValue => {
  emit('change', newValue)
})

const emit = defineEmits(['update:modelValue', 'change'])


const increase = () => {
  if (props.modelValue < props.max) {
    emit('update:modelValue', +props.modelValue + 1)

  }
}

const decrease = () => {
  if (props.modelValue > props.min) {
    emit('update:modelValue', +props.modelValue - 1)

  }
}

let timeBar = null
const increaseMouseDown = () => {
  nextTick(() => {
    timeBar = setInterval(increase, 200)
  })
}
const decreaseMouseDown = () => {
  nextTick(() => {
    timeBar = setInterval(decrease, 200)
  })
}

const clearTimeBar = () => {
  clearInterval(timeBar)
}


</script>

<style lang='scss' scoped>
$bcColor: #f5f7fa;
.fishs {
  position: relative;
  span {
    position: absolute;
    display: flex;
    z-index: 1;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 30px;
    font-size: 13px;
    background-color: $bcColor;
    border: 1px solid #999;
    cursor: pointer;
    &.disabled {
      cursor: not-allowed;
    }
  }
  &-decrease {

  }
  &-increase {
    left: 117px;
  }
  &-input {
    position: relative;
    width: 150px;
    height: 30px;
    &__inner {
      width: 149px;
      height: 30px;
      outline: none;
      text-align: center;
      padding: 5px 30px;
      color: #666;
    }
  }
}

</style>
