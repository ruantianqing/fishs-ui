<template>
  <div class="container">
    <input
      class="fishs-input"
      :class="classes"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      :maxlength='maxlength'
      @input="updateValue"
    />
    <div v-if="clearable && modelValue" @click="clearInput" class="clear">×</div>
    <div v-if="maxlength" class="max-length">{{ String(modelValue).length + ' / ' + maxlength }}</div>
  </div>
</template>

<script setup lang='ts'>import { computed } from 'vue';


const props = defineProps({
  modelValue: {
    type: String
  },
  placeholder: {
    type: String
  },
  type: {
    type: String,
    default: 'text'
  },
  size: {
    type: String as () => 'large' | 'default' | 'small',
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  maxlength: {
    type: String
  }
})

const classes = computed(() => {
  return {
    [`fishs-size-${props.size}`]: props.size
  }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (e) => {
  emit('update:modelValue', e.target.value)
}

const clearInput = () => {
  emit('update:modelValue', '')
}



</script>

<style lang='scss' scoped>
$blue: #40a9ff;

.container {
  width: 300px;
  display: flex;
  flex-wrap: nowrap;
  .fishs-input {
    outline: none;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 7px;
    width: 100%;
    font-size: 14px;
    color: #333;
    &:focus {
      border-color: $blue;
    }
    &.fishs-size-small {
      font-size: 14px;
      padding: 3px;
    }
    &.fishs-size-large {
      font-size: 14px;
      padding: 10px;
    }
    &[disabled] {
      cursor: not-allowed;
    }
  }
  .clear {
    width: 15px;
    height: 15px;
    font-size: 10px;
    line-height: 15px;
    text-align: center;
    transform: translate(-28px, 8px);
    border: 1px solid #999;
    border-radius: 50%;
    color: #999;
    cursor: pointer;
  }
  .max-length {
    width: 45px;
    font-size: 10px;
    color: #999;
    transform: translate(-45px, 8px);
  }
}
</style>
