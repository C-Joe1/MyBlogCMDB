<script setup>
import {h, onMounted, ref} from "vue";
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
  TableLink24Filled,
  CalendarInfo16Filled
} from "@vicons/fluent";
import {SafetyCertificateFilled, GitlabFilled} from "@vicons/antd";
import {UserCog, GitAlt} from "@vicons/fa";
import {Server} from "@vicons/ionicons5";
import {InsertChartFilled} from "@vicons/material";

function renderIcon(icon) {
  return () => h(NIcon, null, {default: () => h(icon)});
}

function renderRouteLink(path, params, label) {
  return () =>
      h(
          RouterLink,
          {
            to: {
              path: path,
              params: params,
            }
          },
          {
            default: () => label
          }
      )
}

const menuOptions = [
  {
    label: "概览",
    key: "overview",
    icon: renderIcon(ContentView32Filled),
    children: [
      {
        label: renderRouteLink("/overview/permission", {}, "权限"),
        key: "permission-overview",
        icon: renderIcon(UserCog)
      },
      {
        label: renderRouteLink("/overview/machine", {}, "机器"),
        key: "machine-overview",
        icon: renderIcon(Server),
      },
      {
        label: renderRouteLink("/overview/concept", {}, "业务概念"),
        key: "concept-overview",
        icon: renderIcon(TextBulletListSquare24Filled),
      },
      {
        label: renderRouteLink("/overview/repo-config", {}, "存储库与配置"),
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
        label: renderRouteLink("/permission-control/group", {}, "成员组"),
        key: "group-management",
        icon: renderIcon(People32Filled),
      },
      {
        label: renderRouteLink("/permission-control/member", {}, "成员"),
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
        label: renderRouteLink("/business-concept/machine", {}, "机器"),
        key: "machine",
        icon: renderIcon(Server),
      },
      {
        label: renderRouteLink("/business-concept/group", {}, "群组"),
        key: "group",
        icon: renderIcon(AppFolder24Filled),
      },
      {
        label: renderRouteLink("/business-concept/security-group", {}, "安全组"),
        key: "security-group",
        icon: renderIcon(SafetyCertificateFilled),
      },
      {
        label: renderRouteLink("/business-concept/resource-pool", {}, "资源池"),
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
        label: renderRouteLink("/config/repo", {}, "存储库"),
        key: "repo",
        icon: renderIcon(GitlabFilled),
      },
      {
        label: renderRouteLink("/config/version-control", {}, "版本控制"),
        key: "version-control",
        icon: renderIcon(GitAlt),
      }
    ]
  },
  {
    label: renderRouteLink("/audit", {}, "审计"),
    key: "audit",
    icon: renderIcon(InsertChartFilled),
  },
  {
    label: renderRouteLink("/about", {}, "关于"),
    key: "about",
    icon: renderIcon(CalendarInfo16Filled),
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

//media获取系统主题
let whichThemeWithSystem = window.matchMedia('(prefers-color-scheme: dark)');

//初始化 dark mode 常量，matches上方常量，实现加载页面后跟随系统主题
let useDarkTheme = ref(whichThemeWithSystem.matches);

onMounted(() => {
  document.getElementById("left-menu").style.height = window.innerHeight + 'px'
  document.getElementById("right-content").style.width = window.innerWidth - 240 + 'px'

  window.onresize = () => {
    document.getElementById("left-menu").style.height = window.innerHeight + 'px'
    autoChangeRightContentWidth()
  }

  //call back切换页面主题
  let systemThemeCallback = (e) => {
    let prefersDarkMode = e.matches;
    useDarkTheme.value = !!prefersDarkMode;
  };

  //监听系统主题切换
  if (typeof whichThemeWithSystem.addEventListener === 'function') {
    whichThemeWithSystem.addEventListener('change', systemThemeCallback);
  } else if (typeof whichThemeWithSystem.addListener === 'function') {
    whichThemeWithSystem.addListener(systemThemeCallback);
  }
})

</script>

<template>
  <div class="app-view">
    <n-config-provider :theme="useDarkTheme ? darkTheme : null">
      <n-space vertical>
        <n-layout position="absolute" has-sider>
          <n-layout-sider id="left-menu" bordered show-trigger collapse-mode="width" :collapsed-width="64" :width="240"
                          :native-scrollbar="false" @on-update:collapsed="autoChangeRightContentWidth">
            <n-menu :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions"
                    @update:value="handleMenuItemClicked"/>
          </n-layout-sider>
          <n-layout-content id="right-content" content-style="padding: 24px;" :native-scrollbar="false">
            <router-view style="width: 100%; height: 100%;"></router-view>
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
