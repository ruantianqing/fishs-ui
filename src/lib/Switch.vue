<template>
  <button class="fishs-switch" @click="toggle" :class="{ 'fishs-checked': value }">
    <span></span>
  </button>
</template>
<script lang="ts" setup>
import { ref, SetupContext } from "vue";
// declare const props: {value: boolean}
// declare const context: SetupContext

const props = defineProps({
  value: Boolean
})

const emit = defineEmits(['update:value', 'delete'])

const toggle = () => {
  emit("update:value", !props.value);
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.fishs-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: calc($h/2);
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: calc($h2 / 2);
    transition: all 250ms;
  }
  &.fishs-checked {
    background: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.fishs-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>