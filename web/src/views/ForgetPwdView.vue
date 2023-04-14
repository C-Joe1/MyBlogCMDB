<template>
  <n-layout>
    <div class="about-view">
      This is Forget Pwd View.
    </div>
  </n-layout>
</template>

<script setup>
import {onMounted} from 'vue';

onMounted(() => {
  document.title = '忘记密码';
})

</script>

<style scoped>
.about-view {
  width: 100%;
  height: 100vh;
}
</style>