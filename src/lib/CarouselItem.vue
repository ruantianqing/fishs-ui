<template>
  <div class="fishs-carousel__item" ref="carouselItem">
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>

</script>

<style lang='scss' scoped>
.fishs-carousel__item {
  position: absolute;
  width: inherit;
}
</style>
