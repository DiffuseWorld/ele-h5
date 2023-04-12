<script setup lang="ts">
import TabsView from './views/tabs/TabView.vue'
import {fetchTest} from '@/api/test'
fetchTest().then(data=>console.log(data))
</script>

<template>
  <TabsView/>
</template>

<style scoped>
@import 'normalize.css';
#app{
  /**
  使字体抗锯齿，从而看起来更清晰
  */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased
}
</style>
