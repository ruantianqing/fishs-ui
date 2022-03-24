<template>
  <div class="fishs-carousel" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="fishs-window" ref="carousel">
      <slot></slot>
    </div>
    <div class="arrows">
      <span class="arrows-left" @click="pre">&lt;</span>
      <span class="arrows-right" @click="next">&gt;</span>
    </div>
    <div class="dots">
      <span
        v-for="(child, index) in children"
        :key="index"
        :class="{active: index === currentIndex}"
        @click="jump(index)"
        ></span>
    </div>
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
const children = ref(null)
const currentIndex = ref(0)
const timeBar = ref(null)
const canClick = ref(true)


onMounted(() => {
  children.value = carousel.value.children
  children.value[currentIndex.value].style.zIndex = 10
  autoPlay()
})

// 上一张
const pre = () => {
  if (!canClick.value) return
  canClick.value = false
  const saveCurrentIndex = currentIndex.value
  currentIndex.value = currentIndex.value - 1 < 0 ? children.value.length - 1 : currentIndex.value - 1
  resetZIndex()
  children.value[currentIndex.value].style.zIndex = 10
  addAnimation(saveCurrentIndex, currentIndex.value, 1)
}

// 下一张
const next = () => {
  if (!canClick.value) return
  canClick.value = false
  const saveCurrentIndex = currentIndex.value
  currentIndex.value = currentIndex.value + 1 > children.value.length - 1 ? 0 : currentIndex.value + 1
  resetZIndex()
  children.value[currentIndex.value].style.zIndex = 10
  addAnimation(saveCurrentIndex, currentIndex.value, -1)
}

// 点击小圆点
const jump = (index) => {
  if (index === currentIndex.value) return
  const current = currentIndex.value
  const direction = index > currentIndex.value ? -1 : 1
  currentIndex.value = index
  addAnimation(current, index, direction)
}

// 自动播放
const autoPlay = () => {
  if (timeBar.value) window.clearInterval(timeBar.value)
  timeBar.value = window.setInterval(() => {
    next()
  }, 2000)
}

// 鼠标悬停
const mouseEnter = () => {
  window.clearInterval(timeBar.value)
}

// 鼠标离开开始自动播放
const mouseLeave = () => {
  autoPlay()
}

// 添加动画
const addAnimation = (currentIndex, nextIndex, direction) => {
  const currentDom = children.value[currentIndex]
  const nextDom = children.value[nextIndex]
  currentDom.style.zIndex = 10
  nextDom.style.zIndex = 10
  go(currentDom, nextDom, direction)
}

// 使用requestAnimationFrame 实现动画
const go = (currentDom, nextDom, direction) => {
  let currentDomPosition = 0
  let nextDomPosition = -100 * direction
  nextDom.style.transform = `translateX(${nextDomPosition}%)`
  const render = () => {
    currentDomPosition += (2 * direction)
    nextDomPosition += (2 * direction)
    if ((direction === 1 && nextDomPosition > 0) || (direction === -1 && nextDomPosition < 0)) {
      onFinish()
      return
    }
    currentDom.style.transform = `translateX(${currentDomPosition}%)`
    nextDom.style.transform = `translateX(${nextDomPosition}%)`
    window.requestAnimationFrame(render)
  }
  // 第一帧开始
  window.requestAnimationFrame(render)
}

// 动画过渡完成的回调
const onFinish = () => {
  for (let i = 0; i < children.value.length; i++) {
    if (i !== currentIndex.value) {
      children.value[i].style.zIndex = 0
      children.value[i].style.transform = `translateX(0)`
    }
  }
  canClick.value = true
}

// 重置z-index
const resetZIndex = () => {
  for (let i = 0; i < children.value.length; i++) {
    children.value[i].style.zIndex = 0
  }
}



</script>

<style lang='scss' scoped>
.fishs-carousel {
  width: v-bind(width);
  .fishs-window {
    position: relative;
    display: flex;
    height: v-bind(height);
    width: v-bind(width);
    overflow-x: hidden;
  }
  .arrows {
    position: absolute;
    z-index: 100;
    top: 50%;
    transform: translateY(220%);
    display: flex;
    justify-content: space-between;
    width: v-bind(width);
    .arrows-left {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        background-color: #ccc;
      }
    }
    .arrows-right {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        background-color: #ccc;
      }
    }
  }
  .dots {
    position: absolute;
    z-index: 100;
    bottom: 0;
    left: 50%;
    transform: translateX(-105%);
    display: flex;
    justify-content: center;
    width: v-bind(width);
    span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #fff;
      margin-right: 5px;
      cursor: pointer;
    }
    .active {
      background-color: #ccc;
    }
  }
}

</style>
