<template>
  <div class="option-item" @click="selectOption">{{ label }}</div>
</template>

<script setup lang='ts'>

const props = defineProps({
  label: {
    type: String
  },
  value: {
    type: String
  }
})

const emit = defineEmits(['update-option'])

const selectOption = () => {
  emit('update-option', [props.label, props.value])
}


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
}
</style>
