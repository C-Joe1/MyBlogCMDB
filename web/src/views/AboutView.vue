<template>
  <n-layout>
    <div class="about-view">
      About Page.
    </div>
  </n-layout>
</template>

<script setup>
import {onMounted} from 'vue';

onMounted(() => {
  document.title = '关于 MyBlogCMDB';
})

</script>

<style scoped>
.about-view {
  width: 100%;
  height: 100vh;
}
</style>
