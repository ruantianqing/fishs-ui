<template>
  <div class="fishs-col">
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue';


const props = defineProps({
  span: {
    type: Number,
    default: 24
  },
  gutter: {
    type: Number,
    default: 0
  },
  offset: {
    type: Number,
    default: 0
  }
})

const width = computed(() => {
  return props.span / 24 * 100 + '%'
})

const gutter = computed(() => {
  return props.gutter + 'px'
})

const offset = computed(() => {
  return props.offset / 24 * 100 + '%'
})



</script>

<style lang='scss' scoped>
.fishs-col {
  width: v-bind(width);
  margin-right: v-bind(gutter);
  margin-left: v-bind(offset);
}

</style>
