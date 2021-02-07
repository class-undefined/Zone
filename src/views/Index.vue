<template>
  <div class="container">
    <!--    will add flex-->
    <div class="text-container">
      <div class="line-down">
        <svg-icon name="st-github" :size="50"/>
      </div>
      <div class="divider-container">
        <el-divider class="divider"/>
      </div>
      <div class="text-box">
        <component :is="currentComponent"/>
      </div>
      <div class="divider-container">
        <el-divider class="divider"/>
      </div>
      <div class="line-up" id="line-up"></div>
      <a class="a-btn a-btn-left" id="a-btn-left" @click="login">Login</a>
      <a class="a-btn a-btn-right" id="a-btn-right" @click="register">Join us</a>
    </div>
    <footer class="footer">
      <p class="copyright">© Copyright [2021] by <a href="#">野漫横江</a> AllRightsReserved.</p>
    </footer>
  </div>
</template>

<script lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import LoginForm from '@/components/LoginForm/LoginForm.vue'
import RegisterForm from '@/components/RegisterForm/RegisterForm.vue'
import IndexViewTip from '@/components/IndexViewTip/IndexViewTip.vue'
import { ref, watch } from 'vue'

export default {
  name: 'index',
  components: {
    SvgIcon,
    LoginForm,
    RegisterForm,
    IndexViewTip
  },
  setup () {
    const currentComponent = ref('index-view-tip')
    watch(currentComponent, (newVal, oldVal) => {
      /* 左按钮 */
      const leftBtn = document.getElementById('a-btn-left')
      /* 右按钮 */
      const rightBtn = document.getElementById('a-btn-right')
      /* line-up */
      const lineUp = document.getElementById('line-up')
      switch (newVal) {
        case 'LoginForm' : {
          /* 隐藏右按钮 */
          if (rightBtn !== null) rightBtn.className = 'a-btn a-btn-right a-btn-right-hidden'
          /* 拉长左按钮 */
          if (leftBtn !== null) leftBtn.className = 'a-btn a-btn-left a-btn-left-login'
          /* 线条缩短 */
          if (lineUp !== null) lineUp.className = 'line-up line-up-login'
          document.title = 'Zone - 登录'
          break
        }
        case 'RegisterForm': {
          /* 拉长右按钮 */
          if (rightBtn !== null) rightBtn.className = 'a-btn a-btn-right a-btn-right-register'
          /* 隐藏左按钮 */
          if (leftBtn !== null) leftBtn.className = 'a-btn a-btn-left a-btn-left-hidden'
          /* 线条缩短 */
          if (lineUp !== null) lineUp.className = 'line-up line-up-login'
          document.title = 'Zone - 注册'
          break
        }
      }
      console.log(newVal, oldVal)
    })
    const login = () => {
      /* 如果当前组件就是LoginForm，则在if内部写入登录相关操作 */
      if (currentComponent.value === 'LoginForm') {
        /* 登录代码 */
        return
      }
      currentComponent.value = 'LoginForm'
    }
    const register = () => {
      /* 如果当前组件就是RegisterForm，则在if内部写入注册相关操作 */
      if (currentComponent.value === 'RegisterForm') {
        /* 注册代码 */
        return
      }
      currentComponent.value = 'RegisterForm'
    }
    return {
      login,
      register,
      currentComponent
    }
  }
}
</script>

<style>
@import "IndexCss/animation.less";
@import "IndexCss/main.less";

body {
  overflow-y: hidden;
}

</style>
