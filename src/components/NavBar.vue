<template>
  <div class="header">
    <div :class="menuBtnClassName" @click="addMenuClickCount">
      <i></i>
      <i></i>
      <i></i>
    </div>
    <el-menu :default-active="activeIndex" :class="navClassName" mode="horizontal"
             @select="handleSelect">
      <el-menu-item :class="elMenuItemClassName" index="1">处理中心</el-menu-item>
      <el-menu-item :class="elMenuItemClassName" index="2">消息中心</el-menu-item>
      <el-menu-item :class="elMenuItemClassName" index="3">订单管理</el-menu-item>
      <el-button-group :class="loginGroupClassName">
        <el-button type="primary" plain>登录</el-button>
        <el-button plain>注册</el-button>
      </el-button-group>
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
      loginGroupClassName
    }
  }
}
</script>

<style lang="less">
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

.header {
  height: 60px;
}

.el-menu {
  //background: none;
  float: right;
  background-color: transparent;
}

.el-menu-item {
  background-color: transparent;
}

.el-menu.el-menu--horizontal {
  border-bottom: none;
}

.el-input {
  margin: 10px 0;
}

.el-menu--horizontal > .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover, .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
  background-color: rgba(255, 255, 255, 0);
  border-radius: 3px 3px 0 0;
}

/* 菜单按钮 */
.menu {
  width: 36px;
  display: none;
  border: 1px solid rgb(102, 177, 255);
  border-radius: 3px;
  padding: 1px 0;
  cursor: pointer;
  float: left;
  margin-top: 15px;
}

/* 菜单的三条线 */
.menu i {
  display: block;
  height: 1px;
  width: 24px;
  margin: 7px auto;
  background-color: rgb(102, 177, 255);
  transition: .5s;
  transform-origin: left;
}

/* 第一条线 */
.menu-active i:nth-child(1) {
  transform: rotate(40deg);
  margin-left: 8px;
}

/* 第二条线 */
.menu-active i:nth-child(2) {
  opacity: 0;
}

/* 第三条线 */
.menu-active i:nth-child(3) {
  transform: rotate(-40deg);
  margin-left: 8px;
}

/* 登录注册 */
.login-group {
  margin: 0 auto;
}

/* <=992px */
@media (max-width: 992px) {
  .menu {
    display: block
  }
  /* 导航菜单 */
  .el-menu {
    position: absolute;
    background-color: rgba(255, 255, 255, .6);
    border-radius: 0 4px 4px 0;
    border-right: 1px solid rgba(121, 187, 255, .5);
    border-bottom: 1px solid rgba(121, 187, 255, .5);
    width: 0; //隐藏
    padding: 0; //隐藏
    left: 0;
    box-sizing: border-box;
    top: 60px;
    display: flex;
    flex-direction: column;
    height: calc(100% - 60px);
    transition: .5s;
  }

  /* 菜单显示 */
  .el-menu-show {
    width: 260px;
    padding: 0 10px;
    border-right: 1px solid rgba(121, 187, 255, .5);
  }

  .el-menu-show .el-menu-item-show {
    opacity: 1;
  }

  /* 隐藏 */
  .el-menu-item {
    opacity: 0;
  }
  /* 登录注册按钮 */
  .login-group {
    display: none;
  }
  .login-group-show{
    display: block;
  }
}

@media (max-width: 768px) {
  .menu {
    display: block
  }

  .el-menu {
    width: 0;
    padding: 0;
    border-right: none;
  }

  .el-menu .el-menu-item {
    opacity: 0;
  }

  .el-menu-show {
    width: 220px;
    padding: 0 10px;
    border-right: 1px solid rgba(121, 187, 255, .5);
  }

  .el-menu-show .el-menu-item-show {
    opacity: 1;
  }

  /* 隐藏 */
  .el-menu-item {
    opacity: 0;
  }
  /* 登录注册按钮 */
  .login-group {
    display: none;
  }
  .login-group-show{
    display: block;
  }
}
</style>
