<script setup>
import {h, onMounted} from "vue";
import {RouterLink, RouterView} from 'vue-router'
import {NIcon} from "naive-ui";
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
import {Server, LogOut} from "@vicons/ionicons5";
import {InsertChartFilled} from "@vicons/material";
import {Point} from "@vicons/tabler";

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
        label: renderRouteLink("/dashboard/overview/permission", {}, "权限"),
        key: "permission-overview",
        icon: renderIcon(UserCog)
      },
      {
        label: renderRouteLink("/dashboard/overview/machine", {}, "机器"),
        key: "machine-overview",
        icon: renderIcon(Server),
      },
      {
        label: renderRouteLink("/dashboard/overview/concept", {}, "业务概念"),
        key: "concept-overview",
        icon: renderIcon(TextBulletListSquare24Filled),
      },
      {
        label: renderRouteLink("/dashboard/overview/repo-config", {}, "存储库与配置"),
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
        label: renderRouteLink("/dashboard/permission-control/group", {}, "成员组"),
        key: "group-management",
        icon: renderIcon(People32Filled),
      },
      {
        label: renderRouteLink("/dashboard/permission-control/member", {}, "成员"),
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
        label: renderRouteLink("/dashboard/business-concept/machine", {}, "机器"),
        key: "machine",
        icon: renderIcon(Server),
      },
      {
        label: renderRouteLink("/dashboard/business-concept/group", {}, "群组"),
        key: "group",
        icon: renderIcon(AppFolder24Filled),
      },
      {
        label: renderRouteLink("/dashboard/business-concept/security-group", {}, "安全组"),
        key: "security-group",
        icon: renderIcon(SafetyCertificateFilled),
      },
      {
        label: renderRouteLink("/dashboard/business-concept/resource-pool", {}, "资源池"),
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
        label: renderRouteLink("/dashboard/config/repo", {}, "存储库"),
        key: "repo",
        icon: renderIcon(GitlabFilled),
      },
      {
        label: renderRouteLink("/dashboard/config/version-control", {}, "版本控制"),
        key: "version-control",
        icon: renderIcon(GitAlt),
      }
    ]
  },
  {
    label: renderRouteLink("/dashboard/audit", {}, "审计"),
    key: "audit",
    icon: renderIcon(InsertChartFilled),
  },
  {
    label: renderRouteLink("/dashboard/about-me", {}, "关于我"),
    key: "about-me",
    icon: renderIcon(CalendarInfo16Filled),
  },
  {
    label: renderRouteLink("", {}, "——————————"),
    key: "divide",
    icon: renderIcon(Point),
    disabled: true,
  },
  {
    label: renderRouteLink("/", {}, "退出 MyBlogCMDB"),
    key: "logout",
    icon: renderIcon(LogOut),
  },
];

function autoChangeRightContentWidth(collapsed) {
  document.getElementById("right-content").style.width = (collapsed ? window.innerWidth - 64 : window.innerWidth - 240) + 'px';
}

onMounted(() => {
  document.title = "MyBlogCMDB - 高可用分布式配置管理数据库系统"
  document.getElementById("left-menu").style.height = window.innerHeight + 'px'
  document.getElementById("right-content").style.width = window.innerWidth - 240 + 'px'

  window.onresize = () => {
    document.getElementById("left-menu").style.height = window.innerHeight + 'px'
    autoChangeRightContentWidth()
  }
})
</script>

<template>
  <div class="dashboard-view">
    <n-space vertical>
      <n-layout has-sider>
        <n-layout-sider id="left-menu" bordered show-trigger collapse-mode="width" :collapsed-width="64" :width="240"
                        :native-scrollbar="false" @on-update:collapsed="autoChangeRightContentWidth">
          <n-menu :collapsed-width="64" :collapsed-icon-size="22" :options="menuOptions"/>
        </n-layout-sider>
        <n-layout-content id="right-content" content-style="padding: 24px;" :native-scrollbar="false">
          <router-view style="width: 100%; height: 100%;"></router-view>
        </n-layout-content>
      </n-layout>
    </n-space>
  </div>
</template>

<style scoped>
.dashboard-view {
  width: 100%;
  height: 100%;
}

</style>