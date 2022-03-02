<template>
<article class="markdown-body" v-html="props.content"></article>
</template>

<script lang="ts" setup>
  const props = defineProps({
    content: {
      // type: String,
      required: true
    }
  })

</script>
