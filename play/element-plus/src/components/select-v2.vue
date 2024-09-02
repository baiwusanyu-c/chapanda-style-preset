<template>
 <div>
   <ElSelectV2
       :options="options"
       v-model="value"
       placeholder="Select" style="width: 240px">
   </ElSelectV2>
   <ElSelectV2
       :options="options"
       v-model="value"
       disabled placeholder="Select" style="width: 240px">
   </ElSelectV2>
   <ElSelectV2
       v-model="value"
       multiple
       :options="options"
       placeholder="Select"
       style="width: 240px"
   >
   </ElSelectV2>
 </div>
</template>

<script lang="ts" setup>
import { ElSelectV2 } from "element-plus";
import { ref } from 'vue'

const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
