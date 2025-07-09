<template>
  <div class="mb-4">
    <el-button >Default</el-button>
    <el-button  type="primary">Primary</el-button>
    <el-button  type="success">Success</el-button>
    <el-button  type="info">Info</el-button>
    <el-button  type="warning">Warning</el-button>
    <el-button  type="danger">Danger</el-button>
  </div>

  <div class="mb-4">
    <el-button disabled>Default disabled</el-button>
    <el-button disabled type="primary">Primary disabled</el-button>
    <el-button disabled type="success">Success disabled</el-button>
    <el-button disabled type="info">Info disabled</el-button>
    <el-button disabled type="warning">Warning disabled</el-button>
    <el-button disabled type="danger">Danger disabled</el-button>
  </div>

  <div class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </div>

  <div class="mb-4">
    <el-button disabled plain>Plain disabled</el-button>
    <el-button disabled type="primary" plain>Primary disabled</el-button>
    <el-button disabled type="success" plain>Success disabled</el-button>
    <el-button disabled type="info" plain>Info disabled</el-button>
    <el-button disabled type="warning" plain>Warning disabled</el-button>
    <el-button disabled type="danger" plain>Danger disabled</el-button>
  </div>

  <div class="mb-4">
    <el-button link >Plain disabled</el-button>
    <el-button link type="primary" >Primary disabled</el-button>
    <el-button link type="success" >Success disabled</el-button>
    <el-button link type="info" >Info disabled</el-button>
    <el-button link type="warning" >Warning disabled</el-button>
    <el-button link type="danger" >Danger disabled</el-button>
  </div>

  <div class="mb-4">
    <el-button disabled link >Plain disabled</el-button>
    <el-button disabled link type="primary" >Primary disabled</el-button>
    <el-button disabled link type="success" >Success disabled</el-button>
    <el-button disabled link type="info" >Info disabled</el-button>
    <el-button disabled link type="warning" >Warning disabled</el-button>
    <el-button disabled link type="danger" >Danger disabled</el-button>
  </div>

  <div class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </div>

  <div>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </div>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>
