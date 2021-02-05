<template>
  <el-form class="form" ref="form" :model="form">
    <el-row style="margin: 0 auto">
      <el-col>
        <el-form-item>
          <el-input class="diy-input" v-model="userName" placeholder="账号">
            <template #prefix>
              <i class="el-icon-user"></i>
            </template>
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row style="margin: 0 auto">
      <el-col>
        <el-form-item>
          <el-input class="diy-input" v-model="passWord" show-password placeholder="密码">
            <template #prefix>
              <i class="el-icon-key"></i>
            </template>
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'LoginForm',
  components: { },
  setup () {
    const userName = ref('')
    const passWord = ref('')
    return {
      userName,
      passWord
    }
  }
}
</script>

<style lang="less">
@import "LoginFormStyle.less";
</style>
