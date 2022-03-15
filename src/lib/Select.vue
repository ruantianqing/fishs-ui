<template>
  <div class="container"> 
    <div class="fishs-input" @click="toggleSelect">
        <span class="fishs-input__suffix" :class="{ rotate: showOption }">&lt;</span>
      <input
        class="fishs-input__inner"
        type="text"
        readonly
        autocomplete="off"
        :placeholder="placeholder"
        v-model="modelValue"
      />
    </div>
    <div class="fishs-option">
      <slot @update-option="select"></slot>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: String
  },
  placeholder: {
    type: String
  }
})

const emit = defineEmits(['update:modelValue'])



const showOption = ref<Boolean>(false)
const toggleSelect = () => {
  showOption.value = !showOption.value
}

const select = (prop) => {
  console.log(prop)
  emit('update:modelValue', prop)
}




</script>

<style lang='scss' scoped>
$blue: #40a9ff;
.container {
  .fishs-input {
    position: relative;
    width: 249px;
    .fishs-input__inner {
      width: 249px;
      height: 40px;
      cursor: pointer;
      border: 1px solid #ccc;
      border-radius: 3px;
      padding: 7px;
      outline: none;
      color: #333;
      padding-left: 35px;
      font-size: 14px;
      &:hover {
        border-color: $blue;
      }
      &:focus {
        border-color: $blue;
      }
    }
    .fishs-input__suffix {
      position: absolute;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      left: 220px;
      width: 14px;
      height: 40px;
      color: #999;
      transform: rotate(90deg);
      transition: all .2s linear;
      &.rotate {
        transform: rotate(-90deg);
      }
    }
    .fishs-input__suffix:hover + .fishs-input__inner {
      border-color: $blue;
    }
  }
  .fishs-option {
    width: 249px;
    border-radius: 5px;
    margin-top: 10px;
    background-color: #fff;
    box-shadow: 2px 2px 4px #bbb, -2px -2px 4px #bbb;
  }
}
</style>
