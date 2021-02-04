<template>
  <div class="header">
    <div :class="menuBtnClassName" @click="addMenuClickCount">
      <i></i>
      <i></i>
      <i></i>
    </div>
    <el-menu :default-active="activeIndex" :class="navClassName" mode="horizontal"
             @select="handleSelect">
      <el-menu-item :class="elMenuItemClassName" index="1">圈子</el-menu-item>
      <el-menu-item :class="elMenuItemClassName" index="2">工具</el-menu-item>
      <el-menu-item :class="elMenuItemClassName" index="3">个人中心</el-menu-item>
      <el-divider :class="elDividerClassName"/>
<!--      <el-button-group :class="loginGroupClassName">-->
<!--        <el-button type="primary" plain>登录</el-button>-->
<!--        <el-button plain>注册</el-button>-->
<!--      </el-button-group>-->
    </el-menu>
  </div>
</template>
<script>
import { ref, computed } from 'vue'

export default {
  name: 'NavBar',
  setup () {
    const activeIndex = ref('1')
    /* 计算菜单按钮单击次数,以此判断打开还是关闭 */
    const menuBtnClickCount = ref(0)
    const activeIndex2 = ref('1')
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath)
    }
    /* 菜单按钮类名 */
    const menuBtnClassName = computed(() => {
      return menuBtnClickCount.value % 2 === 0 ? 'menu' : 'menu menu-active'
    })
    /* 导航栏nav类名 */
    const navClassName = computed(() => {
      return menuBtnClickCount.value % 2 === 0 ? 'el-menu' : 'el-menu el-menu-show'
    })
    /* el-menu-item-show */
    const elMenuItemClassName = computed(() => {
      return menuBtnClickCount.value % 2 === 0 ? 'el-menu-item' : 'el-menu-item el-menu-item-show'
    })
    /* 登录注册按钮类名 */
    const loginGroupClassName = computed(() => {
      return menuBtnClickCount.value % 2 === 0 ? 'login-group' : 'login-group login-group-show'
    })
    /* 登录注册按钮类名 */
    const elDividerClassName = computed(() => {
      return menuBtnClickCount.value % 2 === 0 ? 'el-divider' : 'el-divider el-divider-show'
    })
    const addMenuClickCount = () => {
      menuBtnClickCount.value++
    }
    return {
      handleSelect,
      addMenuClickCount,
      activeIndex,
      activeIndex2,
      menuBtnClassName,
      navClassName,
      elMenuItemClassName,
      loginGroupClassName,
      elDividerClassName
    }
  }
}
</script>

<style lang="less" scoped>
@import "main";
h1 {
  margin: 0;
  float: left;
  font-size: 2em;
  font-weight: 400;
  padding: 10px;

  a {
    color: #409eff;
    text-decoration: none;
  }
}

</style>
