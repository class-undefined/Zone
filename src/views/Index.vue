<template>
  <div class="container">
    <div class="text-container">
      <div class="line-down">
        <svg-icon name="st-github" :size="50"/>
      </div>
      <div class="divider-container">
        <el-divider class="divider"/>
      </div>
      <h1 class="text-introduction">加入我们这个圈子吗</h1>
      <p class="text-say-something">人海浮沉几万里，此心安处是吾乡。</p>
      <div class="divider-container">
        <el-divider class="divider"/>
      </div>
      <div class="line-up"></div>
      <a class="a-btn a-btn-left" @click="login">Login</a>
      <a class="a-btn a-btn-right" style="" href="#">Join us</a>
    </div>
    <footer class="footer">
      <p class="copyright">© Copyright [2021] by <a href="#">野漫横江</a> AllRightsReserved.</p>
    </footer>
  </div>
</template>

<script lang="ts">
import SvgIcon from '@/components/SvgIcon'
import { ElMessageBox } from 'element-plus'

export default {
  name: 'index',
  components: { SvgIcon },
  setup () {
    const login = () => {
      ElMessageBox({
        title: 'Login',
        message: 'RuleTester',
        center: true
      })
    }

    return {
      login
    }
  }
}
</script>

<style scoped>
body {
  overflow-y: hidden;
}

.a-btn {
  display: inline-block;
  height: 3rem;
  width: 7em;
  /*text-align: center;*/
  line-height: 2.75rem;
  padding: 5px 1rem 0 1rem;
  /*text-transform: uppercase;*/
  letter-spacing: 0.1rem;
  /*font-size: 1rem;*/
  font-weight: 300;
  margin-top: 60px;
  cursor: pointer;
  border: 1px solid #557174;
  /*border-radius: 3px;*/
  transition: .3s;
}

.a-btn-left {
  border-right: 0;
  border-radius: 4px 0 0 4px;
  background-color: #557174;
  color: #214151;
}

.a-btn-right {
  border-left: 0;
  background-color: #cfdac8;
  border-radius: 0 4px 4px 0;
  color: #374045
}

.a-btn-left:hover {
  background-color: rgba(255, 255, 255, .5);
  cursor: pointer;
}

.a-btn-right:hover {
  /*border-color: #557174;*/
}

.a-btn:hover {
  background-color: rgba(162, 208, 193, .5);
  cursor: pointer;
}

.container {
  margin: 0 auto;
  height: calc(100vh - 65px);
}

.text-introduction {
  font-size: 36px;
  letter-spacing: .5em;
}

.text-container {
  /*border: 1px solid;*/
  padding: 20px 40px;
  width: 980px;
  transition: .3s;
  margin-top: calc(10%);
}

.text-say-something {
  font-size: 15px;
  font-weight: 400;
  letter-spacing: .25em;
}

.line-down:after {
  content: '';
  display: block;
  position: absolute;
  margin-top: -5px;
  left: calc(50% - 1px);
  width: 1px;
  height: calc(1.5rem + 5px);
  background: #557174;
}

.line-up:before {
  content: '';
  display: block;
  position: absolute;
  margin-top: -25px;
  left: calc(50% - 1px);
  width: 1px;
  height: calc(8rem + 11px);
  background: #557174;
}

.divider-container {
  padding: 0 50px;
}

.divider {
  background-color: #557174;
  height: 1px;
}

.footer {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  align-items: center;
  bottom: 20px;
}

.copyright {
  text-align: center;
  font-weight: 400;
  color: #495c5f;
}

/* <=992 */
@media (max-width: 992px) {
  .container {
    height: 92vh;
    width: 100%;
  }

  .text-introduction {
    font-size: 25px;
    letter-spacing: .25em;
  }

  .text-say-something {
    font-size: 13px;
    letter-spacing: .1em;
  }

  .text-container {
    /*border: 1px solid;*/
    padding: 20px 0;
    width: 100%;
    margin-top: calc(20%);
  }

  .divider-container {
    padding: 0 20px;
  }
}
</style>
