<template>
  <VanConfigProvider :theme-vars='genChaPandaVantTheme()' theme-vars-scope="global">
    <ButtonDemo/>
    <FieldDemo/>
  </VanConfigProvider>
</template>
<script setup lang="ts">
import ButtonDemo from '../components/button/index.vue'
import FieldDemo from '../components/field/index.vue'
import { genChaPandaVantTheme } from '@chapanda/style-preset/vant'
</script>
