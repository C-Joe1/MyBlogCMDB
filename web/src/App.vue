<script setup>
import {h, onMounted} from "vue";
import {RouterLink, RouterView} from 'vue-router'
import {NIcon} from "naive-ui";
import {Person48Filled, People32Filled, ContentView32Filled, TextBulletListSquare24Filled, CalendarSettings20Filled} from "@vicons/fluent";
import {DashboardFilled} from "@vicons/antd";
import {UserCog} from "@vicons/fa";
import {Server} from "@vicons/ionicons5";

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
    icon: renderIcon(CalendarSettings20Filled),
    children: [
      {
        label: "成员组",
        key: "group-management",
        icon: renderIcon(People32Filled),
      },
      {
        label: "成员",
        key: "member-management",
        icon: renderIcon(Person48Filled),
      },
    ]
  },
  {
    label: "业务概念",
    key: "business-concept",
    icon: renderIcon(TextBulletListSquare24Filled),
    children: [
      {
        label: "机器",
        key: "machine",
        icon: renderIcon(Server),
      },
      {
        label: "群组",
        key: "group",
        icon: renderIcon(),
      },
      {
        label: "安全组",
        key: "safely-group",
        icon: renderIcon(),
      },
      {
        label: "资源池",
        key: "resource-pool",
        icon: renderIcon(),
      },
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
