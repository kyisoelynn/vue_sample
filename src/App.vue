<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <i data-feather="flag"></i>
    <i data-feather="activity"></i>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },

  mounted(){
    /* for no-undef error, you must add this line */
    //eslint-disable-next-line
    feather.replace();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
