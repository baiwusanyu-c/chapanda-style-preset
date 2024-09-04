<template>
 <div>
   <el-button :plain="true" @click="open2">Success</el-button>
   <el-button :plain="true" @click="open3">Warning</el-button>
   <el-button :plain="true" @click="open1">Message</el-button>
   <el-button :plain="true" @click="open4">Error</el-button>
 </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'

const open1 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    duration: 9999
  })
}
const open2 = () => {
  ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
    duration: 9999
  })
}
const open3 = () => {
  ElMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
    duration: 9999
  })
}
const open4 = () => {
  ElMessage({
    message: 'Oops, this is a error message.',
    type: 'error',
    duration: 9999
  })
}
</script>
