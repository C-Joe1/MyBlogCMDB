<template>
  <div class="machine-business-concept-view">
    <n-page-header>
      <template #header>
        <n-breadcrumb>
          <n-breadcrumb-item>业务概念</n-breadcrumb-item>
          <n-breadcrumb-item>机器</n-breadcrumb-item>
        </n-breadcrumb>
      </template>
    </n-page-header>
    <n-data-table striped :columns="columns" :data="machines" :pagination="pagination" />
  </div>
</template>

<script setup>
import {h, ref} from "vue";
import {NButton, NTag} from "naive-ui";

let machines = ref([
  {
    "key": "1",
    "id": "fd5edca3-ab52-4e88-9d81-068906a8acd5",
    "type": "物理机",
    "status": "正在运行",
    "group": "我的世界",
    "secure-group": ["Web 服务", "数据库服务", "登录网关服务", "运维"],
    "res-pool": "粤南地区",
    "create-time": "2023/03/10 00:05:00",
    "update-time": "2023/03/10 00:05:00",
  },
  {
    "key": "2",
    "id": "a05a788c-5b1f-43b3-af18-422e98e0c1a8",
    "type": "物理机",
    "status": "正在运行",
    "group": "我的世界",
    "secure-group": ["Web 服务", "数据库服务", "登录网关服务", "运维"],
    "res-pool": "粤南地区",
    "create-time": "2023/03/10 00:05:00",
    "update-time": "2023/03/10 00:05:00",
  }
]);

function handleMachineItemPowerClicked(row) {

}

const columns = [
  {
    type: "selection",
    fixed: "left"
  },
  {
    title: "ID",
    key: "id",
    fixed: "left",
    width: 140,
    // ellipsis: {
    //   tooltip: true
    // }
  },
  {
    title: "类型",
    key: "type",
    fixed: "left",
    width: 70
  },
  {
    title: "群组",
    key: "group",
    fixed: "left",
    width: 150
  },
  {
    title: "资源池",
    key: "res-pool",
    width: 150
  },
  {
    title: "安全组",
    key: "secure-group",
    resizable: true,
    render(row) {
      return row["secure-group"].map((tagKey) => {
        return h(
            NTag,
            {
              style: {
                marginRight: "6px",
                marginTop: "3px"
              },
              bordered: false,
              size: "small"
            },
            {
              default: () => tagKey
            },
        );
      });
    }
  },
  {
    title: "受控时间",
    key: "create-time",
    width: 200
  },
  {
    title: "数据上报时间",
    key: "update-time",
    width: 200
  },
  {
    title: "状态",
    key: "status",
    width: 100
  },
  {
    title: "操作",
    key: "op",
    width: 150,
    fixed: "right",
    render(row) {
      return h(
          NButton,
          {
            size: "tiny",
            tertiary: true,
            onClick: () => handleMachineItemPowerClicked(row)
          },
          {
            default: () => "电源"
          }
      )
    },
  }
];
</script>

<style scoped>

</style>