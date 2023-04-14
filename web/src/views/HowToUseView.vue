<template>
  <n-layout>
    <div class="about-view">
      This is How to Use View.
    </div>
  </n-layout>
</template>

<script setup>
import {onMounted} from 'vue';

onMounted(() => {
  document.title = '如何使用 MyBlogCMDB';
})

</script>

<style scoped>
.about-view {
  width: 100%;
  height: 100vh;
}
</style>
