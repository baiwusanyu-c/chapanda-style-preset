<template>
  <VanConfigProvider :theme-vars='genChaPandaVantTheme()' theme-vars-scope="global">
    <ButtonDemo/>
    <FieldDemo/>
    <TabDemo/>
    <p class="
      bg-cbd-brand-5 fcc border-success">
      Hello world! 7600
    </p>
    <p class="bg-baiwu fcc border-success">
      Hello world! 7600
    </p>
    <p class="pf-regular-24">pf-regular-24 </p>
    <p class="pf-medium-24"> pf-medium-24 </p>
    <p class="pf-regular-20">pf-regular-20 </p>
    <p class="pf-medium-20"> pf-medium-20 </p>
    <p class="pf-regular-18">pf-regular-18 </p>
    <p class="pf-medium-18"> pf-medium-18 </p>
    <p class="pf-regular-17">pf-regular-17 </p>
    <p class="pf-medium-17"> pf-medium-17 </p>
    <p class="pf-regular-16">pf-regular-16 </p>
    <p class="pf-medium-16"> pf-medium-16 </p>
    <p class="pf-regular-15">pf-regular-15 </p>
    <p class="pf-medium-15"> pf-medium-15 </p>

    <p class="font-din">din 9999 </p>
    <p class="font-din-bold"> din-bold 7600</p>
    <p class="font-din-heavy">din-heavy 9999</p>
    <p class="font-din-heavy-lighter"> din-heavy-lighter 9999</p>
  </VanConfigProvider>
</template>
<script setup lang="ts">
import ButtonDemo from '../components/button/index.vue'
import FieldDemo from '../components/field/index.vue'
import TabDemo from '../components/tab/index.vue'
import { genChaPandaVantTheme } from '@chapanda/style-preset-vant'
</script>
