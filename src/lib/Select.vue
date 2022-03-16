<template>
  <div :class="computedClass">
    <div class="fishs-input" @click="toggleSelect">
      <span class="fishs-input__suffix" :class="{ rotate: showOption }">&lt;</span>
      <input
        class="fishs-input__inner"
        type="text"
        readonly
        autocomplete="off"
        :placeholder="placeholder"
        :value="selectValue"
      />
    </div>
    <transition name="slide-fade">
      <div class="fishs-option" v-if="showOption">
        <slot :emitFunc="select"></slot>
      </div>
    </transition>
  </div>
</template>

<script setup lang='ts'>
import { computed, ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: String
  },
  placeholder: {
    type: String
  },
  size: {
    type: String as () => 'large' | 'small' | 'normal',
    default: 'large'
  },
  options: {
    type: Object as () => Array<{
      label: string,
      value: string
    }>,
  }
})

const selectValue = ref('')

const emit = defineEmits(['update:modelValue'])

watch(() => props.modelValue, newValue => {
  props.options.forEach(item => {
    if (item.value === newValue) {
      selectValue.value = item.label
    }
  })
  })

const showOption = ref<Boolean>(false)
const toggleSelect = () => {
  showOption.value = !showOption.value
}

const select = (prop) => {
  emit('update:modelValue', prop[1])
  selectValue.value = prop[0]
  showOption.value = false
}

const computedClass = computed(() => {
  return {
    'fishs-select--large': true,
    'fishs-select--normal': props.size === 'normal',
    'fishs-select--small': props.size === 'small'
  }
})


</script>

<style lang='scss' scoped>
$blue: #40a9ff;
.fishs-select--large {
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
      padding-left: 10px;
      font-size: 16px;
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
      transition: all 0.2s linear;
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
    box-shadow: 2px 2px 2px #ddd, -2px -2px 3px #ddd;
    transition: all 0.9s linear;
  }
    .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.2s linear;
  }
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(-60px) scale(1, 0.3);
    opacity: 0;
  }
}

.fishs-select--normal {
  .fishs-input {
    width: 241px;
    .fishs-input__inner {
      width: 241px;
      height: 32px;
    }
    .fishs-input__suffix {
      left: 211px;
      height: 32px;
    }

  }
  .fishs-option {
    width: 241px;
  }
}
.fishs-select--small {
  .fishs-input {
    width: 196px;
    .fishs-input__inner {
      width: 196px;
      height: 24px;
      font-size: 14px;
    }
    .fishs-input__suffix {
      left: 170px;
      height: 24px;
    }

  }
  .fishs-option {
    width: 196px;
  }
}
</style>
