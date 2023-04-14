<script setup>
</script>

<template>
  <div class="home-view">
    <div class="welcome-text">欢迎使用 MyBlogCMDB</div>
    <div class="version-text">v1.0.0</div>
    <div class="left-img">
      <img src="../../assets/images/Web%20Developer_Monochromatic.svg"
           alt="" style="width: 100%; height: 100%; ">
    </div>
    <div class="right-img">
      <img src="../../assets/images/Code%20Development%20_Monochromatic.svg"
           alt="" style="width: 100%; height: 100%">
    </div>
  </div>
</template>

<style scoped>
.home-view {
  height: 93.5vh !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.welcome-text {
  font-size: 22pt;
}

.version-text {
  margin-top: 10px;
  font-size: 12pt;
}

.left-img {
  width: 140px;
  height: 105px;
  position: absolute;
  left: 5px;
  bottom: 0;
}

.right-img {
  width: 140px;
  height: 105px;
  position: absolute;
  right: 5px;
  bottom: 0;
}
</style>
