<template>
  <Main/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  font-weight: 300;
}
a{
  text-decoration: none;
  color: #557174;
}
body{
  margin: 0 auto;
  padding: 0;
  width:100%;
  background: url("assets/blurd3-62.jpg") no-repeat;
  background-size: 100% 100%;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import Main from '@/view/Main'
export default {
  components: { Main }
}
</script>
