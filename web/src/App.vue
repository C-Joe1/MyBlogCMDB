<script setup>
import {h, onMounted} from "vue";
import {RouterLink, RouterView} from 'vue-router'
import {NIcon, darkTheme} from "naive-ui";
import {
  Person48Filled,
  People32Filled,
  ContentView32Filled,
  TextBulletListSquare24Filled,
  CalendarSettings20Filled,
  TextBoxSettings24Filled,
  AppFolder24Filled,
  TableLink24Filled
} from "@vicons/fluent";
import {SafetyCertificateFilled, GitlabFilled} from "@vicons/antd";
import {UserCog, GitAlt} from "@vicons/fa";
import {Server} from "@vicons/ionicons5";
import {InsertChartFilled} from "@vicons/material";

function renderIcon(icon) {
  return () => h(NIcon, null, {default: () => h(icon)});
}

function renderRouteLink() {
  return undefined
}

const menuOptions = [
  {
    label: "概览",
    key: "overview",
    icon: renderIcon(ContentView32Filled),
    children: [
      {
        label: (name, params, label) => h(RouterLink, {
          to: {
            name: "/",
            params: {},
          },
        }, {
          default: () => label
        }),
        key: "permission-overview",
        icon: renderIcon(UserCog)
      },
      {
        label: "机器",
        key: "machine-overview",
        icon: renderIcon(Server),
      },
      {
        label: "业务概念",
        key: "concept-overview",
        icon: renderIcon(TextBulletListSquare24Filled),
      },
      {
        label: "存储库与配置",
        key: "repo-config-overview",
        icon: renderIcon(TextBoxSettings24Filled),
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
        icon: renderIcon(AppFolder24Filled),
      },
      {
        label: "安全组",
        key: "safely-group",
        icon: renderIcon(SafetyCertificateFilled),
      },
      {
        label: "资源池",
        key: "resource-pool",
        icon: renderIcon(TableLink24Filled),
      },
    ]
  },
  {
    label: "配置",
    key: "config",
    icon: renderIcon(TextBoxSettings24Filled),
    children: [
      {
        label: "存储库",
        key: "repo",
        icon: renderIcon(GitlabFilled),
      },
      {
        label: "版本控制",
        key: "version-control",
        icon: renderIcon(GitAlt),
      }
    ]
  },
  {
    label: "审计",
    key: "audit",
    icon: renderIcon(InsertChartFilled),
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
    <n-config-provider :theme="darkTheme">
      <n-space vertical>
        <n-layout position="absolute" has-sider>
          <n-layout-sider id="left-menu" bordered show-trigger collapse-mode="width" :collapsed-width="64" :width="240"
                          :native-scrollbar="false" @on-update:collapsed="autoChangeRightContentWidth">
            <n-menu :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions"
                    @update:value="handleMenuItemClicked"/>
          </n-layout-sider>
          <n-layout-content id="right-content" content-style="padding: 24px;" :native-scrollbar="false">
            MyBlogCMDB
            <router-view style="width: 100%; height: 100%;"/>
          </n-layout-content>
        </n-layout>
      </n-space>
    </n-config-provider>
  </div>
</template>

<style scoped>
.app-view {
  width: 100%;
  height: 100%;
}
</style>
