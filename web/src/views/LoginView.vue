<template>
  <n-layout>
    <div class="login-view">
      <div class="title">MyBlogCMDB</div>
      <div class="secondary-title">高可用分布式配置管理数据库系统</div>
      <n-input size="small" round placeholder="用户名" class="input"/>
      <n-input type="password" size="small" round placeholder="密码" show-password-on="mousedown" class="input"/>
      <div class="text-box">
        <n-button text class="learn-cmdb" @click="handleHowToUseLinkClicked">如何使用</n-button>
        <n-button text class="forget-pwd" @click="handleForgetPwdLinkClicked">忘记密码</n-button>
      </div>
      <n-button round secondary type="primary" :loading="loading" class="login-button" @click="handleClick">登 录
      </n-button>
      <div class="footer">
        <n-button text class="about" @click="handleAboutLinkClicked">关于 MyBlogCMDB</n-button>
        <n-button text class="github-link" @click="handleGithubLinkClicked">Github 项目仓库</n-button>
      </div>
    </div>
  </n-layout>
</template>

<script>
import {onMounted, defineComponent, ref} from 'vue';
import {useRouter} from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter()
    const loadingRef = ref(false);

    function toPage() {
      router.push("/dashboard");
    }

    function toAbout() {
      router.push("/about")
    }

    function toHowToUse() {
      router.push("/how-to-use")
    }

    function toForgetPwd() {
      router.push("/forget-pwd")
    }

    function toGithub() {
      window.open("https://github.com/C-Joe1/MyBlogCMDB");
    }

    return {
      handleClick() {
        loadingRef.value = true;
        //TODO 将“超时取消加载图标”功能改为判断数据是否正确
        setTimeout(() => {
          loadingRef.value = false;
        }, 2e3);
        toPage()
      },
      handleHowToUseLinkClicked() {
        toHowToUse()
      },
      handleForgetPwdLinkClicked() {
        toForgetPwd()
      },
      handleAboutLinkClicked() {
        toAbout()
      },
      handleGithubLinkClicked() {
        toGithub()
      },
      loading: loadingRef
    };
  }
});

onMounted(() => {
  document.title = "登录 MyBlogCMDB"
})
</script>

<style scoped>
.login-view {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.footer {
  width: 100%;
  height: 8pt;
  left: 10pt;
  bottom: 15pt;
  position: absolute;
  display: flex;
  /*align-items: center;*/
  /*justify-content: center;*/
}

.title {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 26pt;
}

.secondary-title {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 10pt;
  margin-top: 12pt;
  margin-bottom: 10pt;
}

.input {
  width: 160pt;
  height: 18pt;
  margin-top: 10pt;
}

.login-button {
  width: 160pt;
  margin-top: 6pt;
}

.text-box {
  width: 160pt;
  display: flex;
  justify-content: space-between;
  margin-top: 20pt;
}

.forget-pwd {
  width: 50pt;
  font-size: 6pt;
}

.learn-cmdb {
  width: 50pt;
  font-size: 6pt;
}

.about {
  font-size: 8pt;
  margin-right: 15pt;
}

.github-link {
  font-size: 8pt;
  margin-right: 15pt;
}
</style>