<template>
  <div class="fishs-carousel" ref="carousel">
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue';


const props = defineProps({
  height: {
    type: String,
    default: '150px'
  },
  width: {
    type: String,
    default: '750px'
  }
})

const height = props.height
const width = props.width

const carousel = ref(null)

onMounted(() => {
  carousel.value.appendChild(carousel.value.children[0].cloneNode(true))
})

</script>

<style lang='scss' scoped>
.fishs-carousel {
  position: relative;
  display: flex;
  height: v-bind(height);
  width: v-bind(width);
  overflow-x: hidden;
}

</style>
