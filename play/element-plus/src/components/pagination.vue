<template>
  <el-pagination background layout="prev, pager, next" :total="1000" />
  <el-pagination background layout="prev, pager, next" :total="1000" disabled/>
  <div class="example-pagination-block">
    <div class="example-demonstration">When you have few pages</div>
    <el-pagination layout="prev, pager, next" :total="50" />
  </div>
  <div class="example-pagination-block">
    <div class="example-demonstration">When you have more than 7 pages</div>
    <el-pagination layout="prev, pager, next" :total="1000" disabled/>
  </div>
</template>
<script setup lang="ts">
</script>
