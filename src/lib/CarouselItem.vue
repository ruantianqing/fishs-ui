<template>
  <div class="fishs-carousel__item" ref="carouselItem">
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import { nextTick, onMounted, ref } from 'vue';

const carouselItem = ref(null)

const translateX = ref('')

const currentIndex = ref(0)

onMounted(() => {

  setTimeout(() => {
    let index = Array.prototype.indexOf.call(carouselItem.value.parentNode.children, carouselItem.value);
  let width = getComputedStyle(carouselItem.value).width;
  translateX.value = (index - currentIndex.value)* parseInt(width) + 'px';


  setInterval(() => {
    if (currentIndex.value === carouselItem.value.parentNode.children.length - 1) {
      currentIndex.value = 0;
    } else {
      currentIndex.value++;
    }
    translateX.value = (index - currentIndex.value)* parseInt(width) + 'px';
    console.log(translateX.value)
  }, 2000)
  }, 1000)

})

</script>

<style lang='scss' scoped>
$width: v-bind(translateX);
.fishs-carousel__item {
  position: absolute;
  width: inherit;
  transform: translateX($width);
  transition: all 1s linear;
}

</style>
