<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    /* margin-top: 60px; */
  }

  html, body {
    height: 100%;
    margin: 0;
  }
  ul{
    padding: 0;
  }
  ul>li {
    list-style-type: none
  }

  .el-container {
    height: 100%;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  header, footer {
    /*background-color: #D3DCE6;*/
    color: #333;
    text-align: center;
  }

  .el-aside {

    /*overflow: hidden;*/
  }

  .el-main {
    /*background-color: #E9EEF3;*/
    color: #333;
    text-align: left;
  }
</style>
