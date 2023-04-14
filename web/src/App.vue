<!--suppress JSDeprecatedSymbols -->
<script setup>
import {onMounted, ref} from "vue";
import {darkTheme} from "naive-ui";

//media获取系统主题
let whichThemeWithSystem = window.matchMedia('(prefers-color-scheme: dark)');

//初始化 dark mode 常量，matches上方常量，实现加载页面后跟随系统主题
let useDarkTheme = ref(whichThemeWithSystem.matches);

onMounted(() => {
  //call back切换页面主题
  let systemThemeCallback = (e) => {
    let prefersDarkMode = e.matches;
    useDarkTheme.value = !!prefersDarkMode;
  };

  //监听系统主题切换
  if (typeof whichThemeWithSystem.addEventListener === 'function') {
    whichThemeWithSystem.addEventListener('change', systemThemeCallback);
  } else { // noinspection JSDeprecatedSymbols
    if (typeof whichThemeWithSystem.addListener === 'function') {
      whichThemeWithSystem.addListener(systemThemeCallback);
    }
  }
})

</script>

<template>
  <div class="app-view">
    <n-config-provider :theme="useDarkTheme ? darkTheme : null">
      <router-view style="width: 100%; height: 100%;"/>
    </n-config-provider>
  </div>
</template>

<style scoped>
.app-view {
  width: 100%;
  height: 100%;
}
</style>
