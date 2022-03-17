<demo>
列偏移
</demo>

<template>
  <Row>
    <Col :gutter="20" :span="6"><div class="grid-content bg-purple" /></Col>
    <Col :gutter="20" :span="6" :offset="6"><div class="grid-content bg-purple" /></Col>
  </Row>
</template>

<script lang="ts" setup>
import { Row, Col } from '../lib/index';


</script>

<style lang="scss" scoped>
  .fishs-row {
    margin-bottom: 20px;
  }
  .grid-content {
    min-height: 36px;
    border-radius: 4px;
  }
  .grid-content.bg-purple-dark {
    background: #99a9bf;
  }
  .grid-content.bg-purple {
    background: #d2d6de;
  }
  .grid-content.bg-purple-light {
    background: #eaeef7;
  }

  
</style>