<demo>
常规用法
</demo>

<template>
  <Row>
    <Col :span="24"><div class="grid-content bg-purple-dark" /></Col>
  </Row>
  <Row>
    <Col :span="12"><div class="grid-content bg-purple" /></Col>
    <Col :span="12"><div class="grid-content bg-purple-light" /></Col>
  </Row>
  <Row>
    <Col :span="8"><div class="grid-content bg-purple" /></Col>
    <Col :span="8"><div class="grid-content bg-purple-light" /></Col>
    <Col :span="8"><div class="grid-content bg-purple" /></Col>
  </Row>
  <Row>
    <Col :span="6"><div class="grid-content bg-purple" /></Col>
    <Col :span="6"><div class="grid-content bg-purple-light" /></Col>
    <Col :span="6"><div class="grid-content bg-purple" /></Col>
    <Col :span="6"><div class="grid-content bg-purple-light" /></Col>
  </Row>
  <Row>
    <Col :span="4"><div class="grid-content bg-purple" /></Col>
    <Col :span="4"><div class="grid-content bg-purple-light" /></Col>
    <Col :span="4"><div class="grid-content bg-purple" /></Col>
    <Col :span="4"><div class="grid-content bg-purple-light" /></Col>
    <Col :span="4"><div class="grid-content bg-purple" /></Col>
    <Col :span="4"><div class="grid-content bg-purple-light" /></Col>
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