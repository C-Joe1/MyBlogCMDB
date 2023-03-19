<script setup>
import {h, onMounted} from "vue";
import {RouterLink, RouterView} from 'vue-router'
import {NIcon} from "naive-ui";
import {AdminPanelSettingsFilled} from "@vicons/material";
import {Person48Filled, People32Filled, ContentView32Filled} from "@vicons/fluent";
import {DashboardFilled} from "@vicons/antd";
import {UserCog} from "@vicons/fa";

function renderIcon(icon) {
  return () => h(NIcon, null, {default: () => h(icon)});
}

const menuOptions = [
  {
    label: "概览",
    key: "overview",
    icon: renderIcon(ContentView32Filled),
    children: [
      {
        label: "权限",
        key: "permission-overview",
        icon: renderIcon(UserCog)
      },
    ]
  },
  {
    label: "权限控制",
    key: "permission-control",
    icon: renderIcon(AdminPanelSettingsFilled),
    children: [
      {
        label: "成员管理",
        key: "member-management",
        icon: renderIcon(Person48Filled),
      },
      {
        label: "组管理",
        key: "group-management",
        icon: renderIcon(People32Filled),
      }
    ]
  }
];

function autoChangeRightContentWidth(collapsed) {
  document.getElementById("right-content").style.width = (collapsed ? window.innerWidth - 64 :
      window.innerWidth - 240) + 'px';
}

function handleMenuItemClicked(key, item) {
  console.log(key)
  console.log(item)
}

onMounted(() => {
  document.getElementById("left-menu").style.height = window.innerHeight + 'px'
  document.getElementById("right-content").style.width = window.innerWidth - 240 + 'px'
  window.onresize = () => {
    document.getElementById("left-menu").style.height = window.innerHeight + 'px'
    autoChangeRightContentWidth()
  }
})

</script>

<template>
  <div class="app-view">
    <n-space vertical>
      <n-layout position="absolute" has-sider>
        <n-layout-sider id="left-menu" bordered show-trigger collapse-mode="width" :collapsed-width="64" :width="240"
                        :native-scrollbar="false" @on-update:collapsed="autoChangeRightContentWidth">
          <n-menu :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions"
                  @update:value="handleMenuItemClicked"/>
        </n-layout-sider>
        <n-layout-content id="right-content" content-style="padding: 24px;" :native-scrollbar="false">
          MyBlogCMDB
          <router-view/>
        </n-layout-content>
      </n-layout>
    </n-space>
  </div>
</template>

<style scoped>
.app-view {
  width: 100%;
  height: 100%;
}
</style>
