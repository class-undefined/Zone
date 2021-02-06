<template>
  <el-container>
    <el-header>
      <nav-bar/>
    </el-header>
    <el-container>
      <router-view v-slot="{ Component }">
          <component :is="Component" />
      </router-view>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/NavBar/NavBar.vue'

export default defineComponent({
  name: 'Main',
  components: { NavBar }
})
</script>

<style scoped>
/*.el-zoom-in-center-enter-active, .el-zoom-in-center-leave-active {*/
/*  transition: opacity 3s*/
/*}*/

.el-header, .el-footer {
  background-color: rgba(255, 255, 255, .6);
  border-bottom: 1px solid #839b97;
  height: 60px;
  line-height: 60px;
  margin-bottom: 5px;
}

.el-aside {
  background-color: #D3DCE6;
  border-radius: 3px;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
