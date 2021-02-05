<template>
  <el-form class="form form-register" ref="form" :model="form">
    <el-row style="margin: 0 auto">
      <el-col>
        <el-form-item>
          <el-input class="diy-input diy-input-register" v-model="userName" placeholder="账号">
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
          <el-input class="diy-input diy-input-register" show-password v-model="passWord" placeholder="密码">
            <template #prefix>
              <i class="el-icon-key"></i>
            </template>
          </el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row style="margin: 0 auto">
      <el-col>
        <el-form-item>
          <el-input class="diy-input diy-input-register" show-password v-model="checkPw" placeholder="检查密码">
            <template #prefix>
              <i class="el-icon-paperclip"></i>
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
  name: 'RegisterForm',
  components: { },
  setup () {
    const userName = ref('')
    const passWord = ref('')
    const checkPw = ref('')
    return {
      userName,
      passWord,
      checkPw
    }
  }
}
</script>

<style lang="less">
@import "RegisterFormStyle";
</style>
